import "./globals.css";
import { Manrope } from "next/font/google";

import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokBridgeLoader from "@storyblok/react/bridge-loader";

// import { LayoutGroup } from "framer-motion";

import Page from "@/components/Page";
import Branch from "@/components/Branch";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import FooterCol from "@/components/Footer/FooterColumn";
import Link from "@/components/Basic/Link";
import Image from "@/components/Basic/Image";
import Headline from "@/components/Basic/Headline";
import Text from "@/components/Basic/Text";
import GridItem from "@/components/Basic/GirdItem";
import Grid from "@/components/Grid";
import ScrollSlider from "@/components/Slider/HorizontalScrollSlider";
import Article from "@/components/Basic/Article";
import AllArticles from "@/components/Basic/AllArticles";
import Marquee from "@/components/Slider/Marquee";
import ValueDokument from "@/components/Custom/ValueDokument";
import ValueDokumentEntry from "@/components/Custom/ValueDokumentEntry";
import Timetable from "@/components/Custom/Timetable";
import TimetableColumn from "@/components/Custom/TimetableColums";
import TimetableSubject from "@/components/Custom/TimetableSubject";

storyblokInit({
  accessToken: process.env.storyblokApiToken,
  apiOptions: {
    // because of loading Problems
    cache: { type: "none" },
  },
  use: [apiPlugin],
  components: {
    page: Page,
    branch: Branch,
    custom_link: Link,
    custom_image: Image,
    hero: Hero,
    navbar: Navbar,
    footer: Footer,
    fotter_col: FooterCol,
    headline: Headline,
    grid: Grid,
    grid_item: GridItem,
    text: Text,
    scroll_slider: ScrollSlider,
    article: Article,
    all_articles: AllArticles,
    marquee: Marquee,
    value_document: ValueDokument,
    value_document_entry: ValueDokumentEntry,
    timetable: Timetable,
    timetable_subject: TimetableSubject,
    timetable_cols: TimetableColumn,
  },
});

const manrope = Manrope({ subsets: ["latin"] });

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
      {/* <LayoutGroup> */}
      <body className={manrope.className}>{children}</body>
      <StoryblokBridgeLoader options={{}} />
      {/* </LayoutGroup> */}
    </html>
  );
}
