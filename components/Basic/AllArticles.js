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
        data.stories.map((article) => {
          article.content.slug = article.slug;
          return article;
        }),
      );
    };
    getArticles();
  }, []);
  return (
    <div className="place-items-cente col-span-4 w-full p-4">
      <p className="text-3xl ">{blok.headline}</p>
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4 [&>*:nth-child(odd)]:lg:col-start-2">
        <LayoutGroup>
          {articles[0] &&
            articles.map((article) => (
              <ArticleTeaser article={article.content} key={article.uuid} />
            ))}
        </LayoutGroup>
      </div>
    </div>
  );
};
export default AllArticles;
