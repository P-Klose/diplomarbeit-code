import { PageProps } from "@/types/interfaces";
import { fetchData } from "@/util/storyblok";
import StoryblokStory from "@storyblok/react/story";
import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
  title: "Schüler:innen - HTL Leonding",
  description: "",
};

const Home: FC<PageProps> = async ({ params }) => {
  const data = await fetchData(params.lng, "schueler-innen");
  return <StoryblokStory story={data.story} />;
};

export default Home;
