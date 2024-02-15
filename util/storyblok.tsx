import { ISbStoriesParams, getStoryblokApi } from "@storyblok/react/rsc";
import { revalidateTag } from "next/cache";

// export async function fetchData(lng: string, slug: string) {
//   const stroyblokApi = getStoryblokApi();
//   let sbParams: ISbStoriesParams = {
//     cv: Date.now(),
//     version:
//       process.env.storyblokApiVersion == "published" ? "published" : "draft",
//     resolve_relations: [
//       "featured_articles.articles",
//       "scroll_slider_select.slider",
//     ],
//     language: lng,
//   };
//   const { data } = await stroyblokApi.get(`cdn/stories/${slug}`, sbParams);

//   return data;
// }

export async function fetchData(lng: string, slug: string) {
  const storyblokApiBaseUrl = "https://api.storyblok.com/v2/cdn/stories/";
  const storyblokToken = process.env.storyblokApiToken; // replace with your actual Storyblok token
  const version =
    process.env.storyblokApiVersion === "published" ? "published" : "draft";

  const resolveRelations = [
    "featured_articles.articles",
    "scroll_slider_select.slider",
  ];
  const queryString = new URLSearchParams({
    resolve_relations: resolveRelations.join(","),
    version: version,
    language: lng,
  });
  const apiUrl = `${storyblokApiBaseUrl}${slug}?${queryString.toString()}&token=${storyblokToken}`;

  const response = await fetch(apiUrl, {
    method: "GET",
    next: { revalidate: 1 },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if (data == "This record could not be found") {
    return null;
  }
  return updateArticlesWithContent(data);
}

function updateArticlesWithContent(data: any): any {
  const relsMap: Record<string, any> = {};

  data.rels?.forEach((rel: any) => {
    relsMap[rel.uuid] = rel;
  });

  data.story?.content.body?.forEach((section: any) => {
    if (section.articles) {
      section.articles = section.articles.map(
        (articleUUID: string) => relsMap[articleUUID],
      );
    }
    if (section.slider && typeof section.slider[0] == "string") {
      section.slider = section.slider.map(
        (sliderUUID: string) => relsMap[sliderUUID],
      );
    }
  });

  return data;
}
