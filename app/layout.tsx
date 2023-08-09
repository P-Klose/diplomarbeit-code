import "./globals.css";
// import { Inter } from "next/font/google";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokBridgeLoader from "@storyblok/react/bridge-loader";

import Page from "@/components/Page";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Headline from "@/components/Headline";
import GridCard from "@/components/GridCard";

storyblokInit({
  accessToken: process.env.storyblokApiToken,
  apiOptions: {
    // because of loading Problems
    cache: { type: "none" },
  },
  use: [apiPlugin],
  components: {
    page: Page,
    hero: Hero,
    navbar: Navbar,
    footer: Footer,
    headline: Headline,
    image_l_content: GridCard,
  },
});

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Storyblok and Next.js 13",
  description: "A Next.js and Storyblok app using app router ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <StoryblokBridgeLoader options={{}} />
    </html>
  );
}
