"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import dynamic from "next/dynamic";

const DynamicScrollSlider = dynamic(
  () => import("../components/Slider/HorizontalScrollSlider"),
  {
    ssr: false,
  },
);

const DynamicScrollSelectSlider = dynamic(
  () => import("../components/Slider/HorizontalScrollSelectSlider"),
  {
    ssr: false,
  },
);

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
import Sponsor from "@/components/Basic/Sponsor";
import GridItem from "@/components/Basic/GirdItem";
import Grid from "@/components/Grid";
import Classes from "@/components/Custom/Classes";
import Table from "@/components/Basic/Table";
import Article from "@/components/Basic/Article";
import AllArticles from "@/components/Basic/AllArticles";
import FeatArticles from "@/components/Basic/FeatArticles";
import Marquee from "@/components/Slider/Marquee";
import ValueDokument from "@/components/Custom/ValueDokument";
import ValueDokumentEntry from "@/components/Custom/ValueDokumentEntry";
import Timetable from "@/components/Custom/Timetable";
import TimetableColumn from "@/components/Custom/TimetableColums";
import TimetableSubject from "@/components/Custom/TimetableSubject";

const components = {
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
  table: Table,
  sponsor: Sponsor,
  classes: Classes,
  scroll_slider: DynamicScrollSlider,
  scroll_slider_select: DynamicScrollSelectSlider,
  article: Article,
  all_articles: AllArticles,
  featured_articles: FeatArticles,
  marquee: Marquee,
  value_document: ValueDokument,
  value_document_entry: ValueDokumentEntry,
  timetable: Timetable,
  timetable_subject: TimetableSubject,
  timetable_cols: TimetableColumn,
};

storyblokInit({
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin],
  components,
});

export default function StoryblokProvider({ children }) {
  return children;
}