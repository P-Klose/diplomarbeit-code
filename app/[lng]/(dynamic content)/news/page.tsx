import { PageProps } from "@/types/interfaces";
import { ISbStoriesParams, getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import { FC, cache } from "react";

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
    language: lng,
  };

  const stroyblokApi = getStoryblokApi();
  return stroyblokApi.get(`cdn/stories/news`, sbParams);
}
