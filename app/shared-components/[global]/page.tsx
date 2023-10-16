import { getStoryblokApi, StoryblokComponent } from "@storyblok/react/rsc";
import { FC } from "react";

interface pageProps {
  params: { global: string };
}

const Home: FC<pageProps> = async ({ params }) => {
  const { data } = await fetchData(params.global);

  return (
    <StoryblokComponent
      blok={data.story.content}
      key={data.story.content._uid}
    />
  );
};

export default Home;

export async function fetchData(c_name: string) {
  let sbParams = {
    // cache: "no-store",
    version: process.env.storyblokApiVersion,
  };

  const stroyblokApi = getStoryblokApi();
  return stroyblokApi.get(`cdn/stories/shared-components/${c_name}`, sbParams);
}
