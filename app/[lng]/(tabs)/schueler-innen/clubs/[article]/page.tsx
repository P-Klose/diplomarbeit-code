import { fetchData } from "@/util/storyblok";
import { ISbStoriesParams, getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import { FC } from "react";

interface pageProps {
  params: { article: string; lng: string };
}

const Home: FC<pageProps> = async ({ params }) => {
  const slug = `schueler-innen/clubs/${params.article}`;
  const data = await fetchData(params.lng, slug);

  return <StoryblokStory story={data.story} key={data.story.content._uid} />;
};

export default Home;
