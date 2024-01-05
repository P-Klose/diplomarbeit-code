import Article from "@/components/Basic/Article";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar";
import { ArticlePageProps } from "@/types/interfaces";
import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import { FC } from "react";

const Home: FC<ArticlePageProps> = async ({ params }) => {
  const { data } = await fetchData(params.article);

  return (
    <main>
      <Navbar></Navbar>
      <StoryblokStory story={data.story} key={data.story.content._uid} />
      <Footer></Footer>
    </main>
  );
};

export default Home;

async function fetchData(articlename: string) {
  let sbParams = {
    // cache: "no-store",
    version: process.env.storyblokApiVersion,
  };

  const stroyblokApi = getStoryblokApi();
  return stroyblokApi.get(`cdn/stories/news/${articlename}`, sbParams);
}
