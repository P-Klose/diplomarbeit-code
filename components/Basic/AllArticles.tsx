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
  const shortFilterValues = [
    "IT",
    "IT-M",
    "EL",
    "MEDZ",
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
        // page: 1,
        // per_page: 5,
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
          <div className="flex flex-row items-end">
            <h2 className="break-words text-2xl font-semibold xs:pl-2 md:text-3xl">
              Filter:
            </h2>
            <Link
              key={"selectedFilter"}
              href={`?filter=${selectedFilterStr}`}
              className={`px-3 text-xl font-medium  text-neutral-800`}
            >
              {selectedFilterStr}
            </Link>
          </div>
          <div className="hidden w-full flex-wrap items-start justify-between py-4 xs:pl-2 lg:flex">
            {filterValues.map((item, index) => (
              <Link
                key={index}
                href={`?filter=${item}`}
                className={`px-2 ${
                  selectedFilterStr === item
                    ? "hidden font-medium text-neutral-800"
                    : "text-sm font-normal  text-neutral-600"
                } `}
              >
                {item}
              </Link>
            ))}
          </div>
          <div className="flex w-full flex-wrap items-start justify-between py-4 xs:pl-2 lg:hidden">
            {shortFilterValues.map((item, index) => (
              <Link
                key={index}
                href={`?filter=${filterValues[index]}`}
                className={`px-2 ${
                  selectedFilterStr === filterValues[index]
                    ? "hidden font-medium text-neutral-800"
                    : "text-sm font-normal  text-neutral-600"
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
