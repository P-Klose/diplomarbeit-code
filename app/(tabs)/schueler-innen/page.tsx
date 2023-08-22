import { getStoryblokApi, StoryblokComponent } from "@storyblok/react/rsc";
import { cache } from "react";

export default async function Home() {
  const { data } = await fetchData();
  // console.log("Fetching Data");
  // debug(data);
  return (
    <main className="overflow-hidden">
      {/* <h1>Story: {data.story.id}</h1> */}
      <StoryblokComponent blok={data.story.content} />
    </main>
  );
}

export async function fetchData() {
  let sbParams = {
    // cache: "no-store",
    version: process.env.storyblokApiVersion,
  };

  const stroyblokApi = getStoryblokApi();
  return stroyblokApi.get(`cdn/stories/schueler-innen`, sbParams);
}
