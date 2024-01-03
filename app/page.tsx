import Navbar from "@/components/Navbar";
import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";

export default async function Home() {
  const { data } = await fetchData();
  // console.log("Fetching Data");
  // debug(data);
  return <StoryblokStory story={data.story} />;
}

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
