import Article from "@/components/Basic/Article";
import { getStoryblokApi, StoryblokComponent } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import { FC } from "react";

interface pageProps {
  params: { branch: string; lng: string };
}

const Home: FC<pageProps> = async ({ params }) => {
  const { data } = await fetchData(params.branch, params.lng);

  return <StoryblokStory story={data.story} key={data.story.content._uid} />;
};

export default Home;

async function fetchData(articlename: string, lng: string) {
  let sbParams = {
    // cache: "no-store",
    version: process.env.storyblokApiVersion,
    language: lng,
  };

  const stroyblokApi = getStoryblokApi();
  return stroyblokApi.get(`cdn/stories/ausbildung/${articlename}`, sbParams);
}
