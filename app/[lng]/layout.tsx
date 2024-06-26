import "./globals.css";
import { Manrope } from "next/font/google";

import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import StoryblokProvider from "@/components/StoryblokProvider";

import { dir } from "i18next";
import { languages } from "../i18n/settings";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import { Metadata } from "next";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

storyblokInit({
  accessToken: process.env.storyblokApiToken,
  apiOptions: {
    // because of loading Problems
    cache: { type: "none" },
  },
  use: [apiPlugin],
});

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HTL Leonding",
  authors: [{ name: "HTL Leonding", url: "https://htl-leonding.at" }],
  keywords:
    "Schule, Bildungseinrichtung, HTL, HTBLA, Matura, Informatik, Informationstechnologie, IT, Medientechnik, Elektronik, Technische Informatik, Medizintechnik, Softwareentwicklung, Medienproduktion",
  description:
    "Wir sind DIE Ausbildungsstätte für Informatik, IT-Medientechnik, Elektronik und Medizintechnik.",
};

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: {
    lng: string;
    children: React.ReactNode;
  };
}) {
  return (
    <StoryblokProvider>
      <html lang={lng} dir={dir(lng)}>
        <body className={`${manrope.className} dark:bg-neutral-900`}>
          <Navbar
            params={{
              lng: lng,
              slug: [""],
            }}
          ></Navbar>
          {children}
          <Footer
            params={{
              lng: lng,
              slug: [""],
            }}
          ></Footer>
        </body>
        {/* <StoryblokBridgeLoader options={{}} /> */}
        {/* </LayoutGroup> */}
      </html>
    </StoryblokProvider>
  );
}
