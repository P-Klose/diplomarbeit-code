import { getStoryblokApi, StoryblokComponent } from "@storyblok/react/rsc";
import { cache } from "react";

export default async function Home() {
  const { data } = await fetchData();
  // console.log("Fetching Data");
  // debug(data);
  return <StoryblokComponent blok={data.story.content} />;
}

async function fetchData() {
  let sbParams = {
    // cache: "no-store",
    version: process.env.storyblokApiVersion,
    resolve_relations: ["featured_articles.articles"],
  };

  const stroyblokApi = getStoryblokApi();
  return stroyblokApi.get(`cdn/stories/schueler-innen`, sbParams);
}
