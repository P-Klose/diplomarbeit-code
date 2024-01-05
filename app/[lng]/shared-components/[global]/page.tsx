import { getStoryblokApi, StoryblokComponent } from "@storyblok/react/rsc";
import { FC } from "react";
import StoryblokStory from "@storyblok/react/story";

interface pageProps {
  params: { global: string; lng: string };
}

const Home: FC<pageProps> = async ({ params }) => {
  const { data } = await fetchData(params.global, params.lng);

  return <StoryblokStory story={data.story} key={data.story.content._uid} />;
};

export default Home;

async function fetchData(c_name: string, lng: string) {
  let sbParams = {
    // cache: "no-store",
    version: process.env.storyblokApiVersion,
    language: lng,
  };

  const stroyblokApi = getStoryblokApi();
  return stroyblokApi.get(`cdn/stories/shared-components/${c_name}`, sbParams);
}