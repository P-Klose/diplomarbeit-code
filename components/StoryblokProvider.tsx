"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import DynamicScrollSelectSlider from "@/components/Slider/HorizontalScrollSelectSlider";
import DynamicScrollSlider from "@/components/Slider/HorizontalScrollSlider";

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
import Animation from "@/components/Basic/Animation";
import FeatArticles from "@/components/Basic/FeatArticles";
import Marquee from "@/components/Slider/Marquee";
import ValueDokument from "@/components/Custom/ValueDokument";
import ValueDokumentEntry from "@/components/Custom/ValueDokumentEntry";
import DesignableTable from "@/components/Custom/DesignableTable";
import DesignableTableRow from "@/components/Custom/DesignableTableRow";
import DesignableTableValue from "@/components/Custom/DesignableTableValue";
import Timetable from "@/components/Custom/Timetable";
import TimetableColumn from "@/components/Custom/TimetableColums";
import TimetableSubject from "@/components/Custom/TimetableSubject";
import LinkCollection from "./Basic/LinkCollection";
import FaqCollection from "./Custom/FaqCollection";
import FaqElement from "./Custom/FaqCollectionElement";
import Spacer from "./Basic/Spacer";
import IFrameContainer from "./Custom/IFrameContainer";
import BasicSlider from "./Slider/BasicSlider";
import SiteJump from "./Custom/SiteJump";

const components = {
  page: Page,
  branch: Branch,
  custom_link: Link,
  link_collection: LinkCollection,
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
  animation: Animation,
  all_articles: AllArticles,
  featured_articles: FeatArticles,
  marquee: Marquee,
  value_document: ValueDokument,
  value_document_entry: ValueDokumentEntry,
  designable_table: DesignableTable,
  table_row: DesignableTableRow,
  table_value: DesignableTableValue,
  timetable: Timetable,
  timetable_subject: TimetableSubject,
  timetable_cols: TimetableColumn,
  faq_collection: FaqCollection,
  faq_element: FaqElement,
  spacer: Spacer,
  iframe_container: IFrameContainer,
  basic_slider: BasicSlider,
  site_jump: SiteJump,
};

storyblokInit({
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin],
  components,
});

export default function StoryblokProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
