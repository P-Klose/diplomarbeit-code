import { PageProps } from "@/types/interfaces";
import { fetchData } from "@/util/storyblok";
import { ISbStoriesParams, getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
  title: "Projekte - HTL Leonding",
  description: "",
};

const Home: FC<PageProps> = async ({ params }) => {
  const data = await fetchData(params.lng, "schueler-innen/projekte");
  return <StoryblokStory story={data.story} />;
};

export default Home;
