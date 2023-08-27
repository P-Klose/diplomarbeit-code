"use client";
import ArticleTeaser from "./ArticleTeaser";
import {
  apiPlugin,
  getStoryblokApi,
  storyblokInit,
  storyblokEditable,
} from "@storyblok/react/rsc";

import { useState, useEffect } from "react";

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
        version: "draft", // or 'published'
        starts_with: "news/",
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
    <div className="place-items-cente col-span-full my-4 w-full bg-white">
      <p className="text-3xl ">{blok.headline}</p>
      <div className="mx-auto grid w-full grid-cols-1 gap-6 md:px-16   lg:grid-cols-3 lg:px-24">
        {articles[0] &&
          articles.map((article) => (
            <ArticleTeaser article={article.content} key={article.uuid} />
          ))}
      </div>
    </div>
  );
};
export default AllArticles;
