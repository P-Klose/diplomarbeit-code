import { getStoryblokApi, StoryblokComponent } from "@storyblok/react/rsc";

export default async function Home() {
  const { data } = await fetchData();
  return <StoryblokComponent blok={data.story.content} />;
}

async function fetchData() {
  let sbParams = {
    version: process.env.storyblokApiVersion,
  };

  const stroyblokApi = getStoryblokApi();
  return stroyblokApi.get(`cdn/stories/impressum`, sbParams);
}
