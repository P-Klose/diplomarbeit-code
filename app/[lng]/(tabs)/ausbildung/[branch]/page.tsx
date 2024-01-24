import Article from "@/components/Basic/Article";
import { fetchData } from "@/util/storyblok";
import {
  getStoryblokApi,
  ISbStoriesParams,
  StoryblokComponent,
} from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import { Metadata } from "next";
import { useParams } from "next/navigation";
import { FC } from "react";

interface pageProps {
  params: { branch: string; lng: string };
}

export const metadata: Metadata = {
  title: "HTL Leonding",
  description: "",
};

const Home: FC<pageProps> = async ({ params }) => {
  const slug = `ausbildung/${params.branch}`;
  const data = await fetchData(params.lng, slug);
  return <StoryblokStory story={data.story} key={data.story.content._uid} />;
};

export default Home;
