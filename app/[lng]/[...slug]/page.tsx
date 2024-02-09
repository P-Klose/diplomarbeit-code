import { PageProps } from "@/types/interfaces";
import { fetchData } from "@/util/storyblok";
import { ISbStoriesParams, getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import { FC } from "react";

const Home: FC<PageProps> = async ({ params }) => {
  const data = await fetchData(params.lng, params.slug.join("/"));
  const error_de = "Diese Seite existiert nicht";
  const error_en = "This Page doesn't exist";
  const message = params.lng == "de" ? error_de : error_en;

  if (data != null) {
    return <StoryblokStory story={data.story} />;
  } else {
    return (
      <div className="flex h-screen max-h-[60vh] w-screen flex-col items-center justify-center bg-white">
        <h1 className="text-3xl font-semibold uppercase text-neutral-800">
          Error
        </h1>
        <p className="text-neutral-800">{message}</p>
      </div>
    );
  }
};

export default Home;
