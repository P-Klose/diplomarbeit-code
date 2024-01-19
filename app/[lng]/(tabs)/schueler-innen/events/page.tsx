import { PageProps } from "@/types/interfaces";
import {
  getStoryblokApi,
  ISbStoriesParams,
  StoryblokComponent,
} from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
  title: "Events - HTL Leonding",
  description: "",
};

const Home: FC<PageProps> = async ({ params }) => {
  const { data } = await fetchData(params.lng);
  return <StoryblokStory story={data.story} />;
};

export default Home;

async function fetchData(lng: string) {
  let sbParams: ISbStoriesParams = {
    // cache: "no-store",
    version:
      process.env.storyblokApiVersion == "published" ? "published" : "draft",
    cv: Date.now(),
    language: lng,
  };

  const stroyblokApi = getStoryblokApi();
  return stroyblokApi.get(`cdn/stories/schueler-innen/events`, sbParams);
}
