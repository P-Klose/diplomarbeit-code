import Navbar from "@/components/Navbar";
import { PageProps } from "@/types/interfaces";
import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import { FC } from "react";

const Home: FC<PageProps> = async ({ params }) => {
  const { data } = await fetchData();
  return <StoryblokStory story={data.story} />;
};

export default Home;

async function fetchData() {
  let sbParams = {
    // cache: "no-store",
    version: process.env.storyblokApiVersion,
    resolve_relations: [
      "featured_articles.articles",
      "scroll_slider_select.slider",
    ],
  };

  const stroyblokApi = getStoryblokApi();
  return stroyblokApi.get(`cdn/stories/landing-page`, sbParams);
}
