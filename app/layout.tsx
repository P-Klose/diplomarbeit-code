import "./globals.css";
// import { Inter } from "next/font/google";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokBridgeLoader from "@storyblok/react/bridge-loader";

import Page from "@/components/Page";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import FooterCol from "@/components/Footer/FooterColumn";
import Link from "@/components/Basic/Link";
import Headline from "@/components/Basic/Headline";
import Text from "@/components/Basic/Text";
import GridItem from "@/components/Basic/GirdItem";
import Grid from "@/components/Grid";
import Slider from "@/components/Slider/HorizontalScrollSlider";

storyblokInit({
  accessToken: process.env.storyblokApiToken,
  apiOptions: {
    // because of loading Problems
    cache: { type: "none" },
  },
  use: [apiPlugin],
  components: {
    page: Page,
    custom_link: Link,
    hero: Hero,
    navbar: Navbar,
    footer: Footer,
    fotter_col: FooterCol,
    headline: Headline,
    grid: Grid,
    grid_item: GridItem,
    text: Text,
    slider: Slider,
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
