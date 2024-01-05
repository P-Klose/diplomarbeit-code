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
import { useSearchParams } from "next/navigation";
import Link from "next/link";

import { AllArticlesProps, ArticleProps } from "../../types/interfaces"; //

storyblokInit({
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin],
});

const AllArticles: React.FC<{ blok: AllArticlesProps }> = ({ blok }) => {
  const searchParams = useSearchParams();
  const urlFilterStr = searchParams.get("filter");
  const selectedFilterStr = urlFilterStr ? urlFilterStr : "Alles";
  const filterValues = [
    "Informatik",
    "IT-Medientechnik",
    "Elektronik",
    "Medizientechnik",
    "Reisen",
    "Sport",
    "Alles",
  ];
  const indexOfFilter = filterValues.indexOf(selectedFilterStr);
  const corespondingApiFilters = [
    "*Informatik*",
    "*Medientechnik*",
    "*Elektronik*",
    "*Medizientechnik*",
    "*Reisen*",
    "*Sport*",
    "*",
  ];

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const storyblokApi = getStoryblokApi();
      const { data } = await storyblokApi.get(`cdn/stories`, {
        version: "draft",
        is_startpage: false,
        starts_with: blok.type,
        filter_query: {
          allocate: {
            like: corespondingApiFilters.at(indexOfFilter),
          },
        },
      });

      setArticles((prev) =>
        data.stories.map((article: any) => {
          article.content.slug = article.slug;
          return article;
        }),
      );
    };

    getArticles();
  }, [indexOfFilter]);

  return (
    <section {...storyblokEditable(blok)} className="w-full p-4 sm:col-span-4">
      {blok.filter ? (
        <div>
          <h2 className="break-words text-2xl font-semibold uppercase xs:pl-4 md:text-3xl">
            Filter
          </h2>
          <div className="flex w-full flex-wrap items-center justify-evenly p-4">
            {filterValues.map((item, index) => (
              <Link
                key={index}
                href={`?filter=${item}`}
                className={`px-4 ${
                  selectedFilterStr === item
                    ? "font-medium text-neutral-800"
                    : "font-normal text-neutral-600"
                } `}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
      <div>
        <p className="text-2xl md:text-3xl">{blok.headline}</p>
        <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-3 xl:grid-cols-4 [&>*:nth-child(odd)]:xl:col-start-2">
          <LayoutGroup>
            {articles?.map((article: any) => (
              <ArticleTeaser
                blok={article.content}
                key={article.uuid}
                full_slug={article.full_slug}
              />
            ))}
          </LayoutGroup>
        </div>
      </div>
    </section>
  );
};
export default AllArticles;
