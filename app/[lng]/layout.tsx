import "./globals.css";
import { Manrope } from "next/font/google";

import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import StoryblokProvider from "@/components/StoryblokProvider";

import { dir } from "i18next";
import { languages } from "../i18n/settings";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";

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

export const metadata = {
  title: "Storyblok and Next.js 13",
  description: "A Next.js and Storyblok app using app router ",
};

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: {
    lng: string;
  };
}) {
  return (
    <StoryblokProvider>
      <html lang={lng} dir={dir(lng)}>
        <body className={manrope.className}>
          <Navbar
            params={{
              lng: lng,
            }}
          ></Navbar>
          {children}
          <Footer
            params={{
              lng: lng,
            }}
          ></Footer>
        </body>
        {/* <StoryblokBridgeLoader options={{}} /> */}
        {/* </LayoutGroup> */}
      </html>
    </StoryblokProvider>
  );
}
