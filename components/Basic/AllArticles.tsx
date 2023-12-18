"use client";
import ArticleTeaser from "./ArticleTeaser";
import {
  apiPlugin,
  getStoryblokApi,
  storyblokInit,
  storyblokEditable,
} from "@storyblok/react/rsc";

import { useState, useEffect } from "react";
import { LayoutGroup } from "framer-motion";

storyblokInit({
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin],
});

const AllArticles = ({ blok }) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const storyblokApi = getStoryblokApi();
      const { data } = await storyblokApi.get(`cdn/stories`, {
        version: "draft",
        starts_with: blok.type,
        is_startpage: false,
      });

      setArticles((prev) =>
        data.stories.map((article: any) => {
          article.content.slug = article.slug;
          return article;
        }),
      );
    };

    getArticles();
  }, []);

  return (
    <div {...storyblokEditable(blok)} className="w-full p-4 sm:col-span-4">
      <p className="text-2xl md:text-3xl">{blok.headline}</p>
      <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-3 xl:grid-cols-4 [&>*:nth-child(odd)]:xl:col-start-2">
        <LayoutGroup>
          {articles?.map((article: any) => (
            <ArticleTeaser article={article.content} key={article.uuid} />
          ))}
        </LayoutGroup>
      </div>
    </div>
  );
};
export default AllArticles;
