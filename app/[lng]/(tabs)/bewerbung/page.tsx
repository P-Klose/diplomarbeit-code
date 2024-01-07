import { PageProps } from "@/types/interfaces";
import { getStoryblokApi, StoryblokComponent } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
  title: "Bewerbung - HTL Leonding",
  description: "",
};

const Home: FC<PageProps> = async ({ params }) => {
  const { data } = await fetchData(params.lng);
  return <StoryblokStory story={data.story} />;
};

export default Home;

async function fetchData(lng: string) {
  let sbParams = {
    // cache: "no-store",
    version: process.env.storyblokApiVersion,
    resolve_relations: ["featured_articles.articles"],
    language: lng,
  };

  const stroyblokApi = getStoryblokApi();
  return stroyblokApi.get(`cdn/stories/bewerbung`, sbParams);
}
