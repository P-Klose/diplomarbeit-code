import { getStoryblokApi, StoryblokComponent } from "@storyblok/react/rsc";
import { debug } from "console";
import Navbar from "@/components/Navbar";

export default async function Home() {
  const { data } = await fetchData();
  // console.log("Fetching Data");
  // debug(data);
  return (
    <main className="overflow-hidden">
      <Navbar />
      {/* <h1>Story: {data.story.id}</h1> */}
      <StoryblokComponent blok={data.story.content} />
    </main>
  );
}

export async function fetchData() {
  let sbParams = { version: process.env.storyblokApiVersion };

  const stroyblokApi = getStoryblokApi();
  return stroyblokApi.get(`cdn/stories/ueber-uns`, sbParams);
}
