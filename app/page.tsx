import { getStoryblokApi, StoryblokComponent } from "@storyblok/react/rsc";
import { debug } from "console";
import Navbar from "@/components/Navbar";

export default async function Home() {
  const { data } = await fetchData();
  // console.log("Fetching Data");
  // debug(data);
  return (
    <main className="overflow-hidden">
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
  return stroyblokApi.get(`cdn/stories/landing-page`, sbParams);
}
