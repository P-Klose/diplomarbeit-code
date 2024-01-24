"server only";

import { ISbStoriesParams, getStoryblokApi } from "@storyblok/react/rsc";

export async function fetchData(lng: string, slug: string) {
  const stroyblokApi = getStoryblokApi();
  let sbParams: ISbStoriesParams = {
    // cache: "no-store",
    version:
      process.env.storyblokApiVersion == "published" ? "published" : "draft",
    resolve_relations: [
      "featured_articles.articles",
      "scroll_slider_select.slider",
    ],
    language: lng,
  };
  const { data } = await stroyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return data;
}
