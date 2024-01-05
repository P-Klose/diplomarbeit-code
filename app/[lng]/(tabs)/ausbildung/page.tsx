import { PageProps } from "@/types/interfaces";
import { getStoryblokApi, StoryblokComponent } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import { cache, FC } from "react";

const Home: FC<PageProps> = async ({ params }) => {
  const { data } = await fetchData(params.lng);
  return <StoryblokStory story={data.story} />;
};

export default Home;

async function fetchData(lng: string) {
  let sbParams = {
    // cache: "no-store",
    version: process.env.storyblokApiVersion,
    language: lng,
  };

  const stroyblokApi = getStoryblokApi();
  return stroyblokApi.get(`cdn/stories/ausbildung`, sbParams);
}
