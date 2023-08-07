//import "../globals.css";
// import { Inter } from "next/font/google";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokBridgeLoader from "@storyblok/react/bridge-loader";

import Page from "@/components/Page";
import Teaser from "@/components/Teaser";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

storyblokInit({
  accessToken: process.env.storyblokApiToken,
  apiOptions: {
    // because of loading Problems
    cache: { type: "none" },
  },
  use: [apiPlugin],
  components: {
    page: Page,
    teaser: Teaser,
    hero: Hero,
  },
});

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Storyblok and Next.js 13",
  description: "A Next.js and Storyblok app using app router ",
};

export default function RootLayout({
  children,
  // }: {
  //   children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <StoryblokBridgeLoader options={{}} />
    </html>
  );
}
