"use client";
import ArticleTeaser from "./ArticleTeaser";
import { getStoryblokApi, storyblokEditable } from "@storyblok/react/rsc";

import { useState, useEffect } from "react";
import { LayoutGroup } from "framer-motion";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

import { AllArticlesProps } from "../../types/interfaces"; //
import LinkComponent from "./Link";
import MediaIcon from "../Custom/MediaIcon";

const AllArticles: React.FC<{ blok: AllArticlesProps }> = ({ blok }) => {
  const searchParams = useSearchParams();
  const urlFilterStr = searchParams.get("filter");
  const urlPageNr = parseInt(searchParams.get("page") || "1");
  const [maxPages, setMaxPages] = useState(0);
  const perPage = 10;

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
  const getArticles = async (
    version: string,
    startsWith: string,
    filterQuery: string,
    perPage: number,
    page: number,
  ) => {
    const storyblokApiBaseUrl = "https://api.storyblok.com/v2/cdn/stories";
    const storyblokToken = process.env.storyblokApiToken; // replace with your actual Storyblok token

    const queryString = new URLSearchParams({
      version: version,
      is_startpage: "false",
      starts_with: startsWith,
      sort_by: "content.date:desc",
      per_page: perPage.toString(),
      page: page.toString(),
      "filter_query[allocate][like]": filterQuery,
    });

    const apiUrl = `${storyblokApiBaseUrl}?${queryString.toString()}&token=${storyblokToken}`;

    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        next: { revalidate: 10 },
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const totalHeader = response.headers.get("total");
      if (totalHeader) {
        // Parse total value as integer
        const total = parseInt(totalHeader, 10);
        setMaxPages(Math.ceil(total / perPage));
      }
      const data = await response.json();

      setArticles((prev) =>
        data.stories.map((article: any) => {
          article.content.slug = article.slug;
          return article;
        }),
      );
    } catch (error) {
      //console.error("Error fetching articles:", error);
    }
  };
  useEffect(() => {
    getArticles(
      process.env.storyblokApiVersion === "published" ? "published" : "draft",
      blok.type,
      corespondingApiFilters.at(indexOfFilter)!,
      perPage,
      urlPageNr,
    );
  }, [indexOfFilter, urlPageNr]);

  return (
    <section
      {...storyblokEditable(blok._editable)}
      className="w-full p-4 sm:col-span-4"
    >
      {blok.filter && (
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
      )}
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
            {/* <div className="disc col-span-full"></div> */}
          </LayoutGroup>
        </div>
        <div className="flex items-center justify-end gap-2 pt-6">
          <Link
            className={`${
              urlPageNr == 1
                ? "hidden" //"pointer-events-none cursor-wait border-r-neutral-500 bg-neutral-500 text-neutral-500"
                : "pointer-events-auto border-r-allgemein bg-allgemein text-neutral-700 transition-all hover:bg-opacity-25 hover:text-black"
            } flex items-center border-r-4 bg-opacity-15 p-2 no-underline`}
            href={`?page=${urlPageNr - 1}`}
          >
            <MediaIcon iconName={"arrow-left"} />
            <span className="px-1"></span>
            jüngere Beiträge
          </Link>
          <Link
            className={`${
              urlPageNr == maxPages || maxPages == 0
                ? "hidden" //"pointer-events-none cursor-wait border-l-neutral-500 bg-neutral-500 text-neutral-500"
                : "pointer-events-auto border-l-allgemein bg-allgemein text-neutral-700 transition-all hover:bg-opacity-25 hover:text-black"
            } flex items-center border-l-4 bg-opacity-15 p-2 no-underline`}
            href={`?page=${urlPageNr + 1}`}
          >
            ältere Beiträge
            <MediaIcon iconName={"arrow-right"} />
            <span className="px-1"></span>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default AllArticles;
