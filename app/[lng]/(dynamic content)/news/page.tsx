import { PageProps } from "@/types/interfaces";
import { fetchData } from "@/util/storyblok";
import { ISbStoriesParams, getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import { FC, cache } from "react";

const Home: FC<PageProps> = async ({ params }) => {
  const data = await fetchData(params.lng, "news");
  return <StoryblokStory story={data.story} />;
};

export default Home;
