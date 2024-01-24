import Article from "@/components/Basic/Article";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar";
import { ArticlePageProps } from "@/types/interfaces";
import { fetchData } from "@/util/storyblok";
import { ISbStoriesParams, getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import { FC } from "react";

const Home: FC<ArticlePageProps> = async ({ params }) => {
  const slug = `news/${params.article}`;
  const data = await fetchData(params.lng, slug);

  return <StoryblokStory story={data.story} key={data.story.content._uid} />;
};

export default Home;
