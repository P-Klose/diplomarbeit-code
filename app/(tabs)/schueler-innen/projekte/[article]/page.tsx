import Article from "@/components/Basic/Article";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar";
import { getStoryblokApi, StoryblokComponent } from "@storyblok/react/rsc";
import { FC } from "react";

interface pageProps {
  params: { article: string };
}

const Home: FC<pageProps> = async ({ params }) => {
  const { data } = await fetchData(params.article);

  return (
    <main>
      <Navbar></Navbar>
      <StoryblokComponent
        blok={data.story.content}
        key={data.story.content._uid}
      />
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
  return stroyblokApi.get(
    `cdn/stories/schueler-innen/projekte/${articlename}`,
    sbParams,
  );
}
