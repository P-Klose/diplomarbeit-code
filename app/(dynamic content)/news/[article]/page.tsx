import Article from "@/components/Basic/Article";
import { getStoryblokApi, StoryblokComponent } from "@storyblok/react/rsc";
import { FC } from "react";

interface pageProps {
  params: { article: string };
}

const Home: FC<pageProps> = async ({ params }) => {
  const { data } = await fetchData(params.article);

  return (
    <div>
      <StoryblokComponent
        blok={data.story.content}
        key={data.story.content._uid}
      />
    </div>
  );
};

export default Home;

export async function fetchData(articlename: string) {
  let sbParams = {
    // cache: "no-store",
    version: process.env.storyblokApiVersion,
  };

  const stroyblokApi = getStoryblokApi();
  return stroyblokApi.get(`cdn/stories/news/${articlename}`, sbParams);
}
