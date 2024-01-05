import Article from "@/components/Basic/Article";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar";
import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import { FC } from "react";

interface pageProps {
  params: { article: string; lng: string };
}

const Home: FC<pageProps> = async ({ params }) => {
  const { data } = await fetchData(params.article, params.lng);

  return <StoryblokStory story={data.story} key={data.story.content._uid} />;
};

export default Home;

async function fetchData(articlename: string, lng: string) {
  let sbParams = {
    // cache: "no-store",
    version: process.env.storyblokApiVersion,
    language: lng,
  };

  const stroyblokApi = getStoryblokApi();
  return stroyblokApi.get(
    `cdn/stories/schueler-innen/projekte/${articlename}`,
    sbParams,
  );
}
