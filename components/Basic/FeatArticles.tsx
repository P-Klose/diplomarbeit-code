"use client";
// import ArticleTeaser from "./ArticleTeaser";
import {
  apiPlugin,
  getStoryblokApi,
  storyblokInit,
  storyblokEditable,
} from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";

import { FeatArticlesProps, ArticleProps } from "../../types/interfaces";

import { useState, useEffect } from "react";
import { LayoutGroup } from "framer-motion";
import { motion } from "framer-motion";
import Link from "next/link";
import LinkComponent from "./Link";

storyblokInit({
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin],
});

const FeatArticles: React.FC<FeatArticlesProps> = ({ blok }) => {
  console.log(blok);
  return (
    <LayoutGroup>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        {...storyblokEditable(blok._editable)}
        className="mx-auto w-full max-w-screen-2xl p-4 sm:p-6"
      >
        <h2 className="pb-3 text-2xl font-semibold uppercase md:text-3xl">
          {blok.headline}
        </h2>
        {blok.additional_info ? (
          <div className="prose max-w-none sm:px-2">
            {render(blok.additional_info, {
              blokResolvers: {
                ["custom_link"]: (props: any) => {
                  return <LinkComponent blok={props} key={props._uid} />;
                },
              },
            })}
          </div>
        ) : null}
        <div className="box-border grid w-full grid-cols-1 gap-12 pb-12 pt-10 sm:px-4 lg:grid-cols-3 [&>*:nth-child(even)]:justify-self-end [&>*:nth-child(odd)]:justify-self-start">
          {/* odd:justify-self-end even:justify-self-start */}
          {blok.articles?.map((subblok: any) => {
            //console.log(article);
            return (
              <FeatArticle
                blok={subblok.content}
                key={subblok.uuid}
                full_slug={subblok.full_slug}
              ></FeatArticle>
            );
            // ;
          })}
        </div>
      </motion.section>
    </LayoutGroup>
  );
};

const FeatArticle: React.FC<{ blok: ArticleProps; full_slug: string }> = ({
  blok,
  full_slug,
}) => {
  function transformDateFormat(inputDate: string) {
    const dateParts = inputDate.split(" ");
    if (dateParts.length === 2) {
      const [datePart, timePart] = dateParts;
      const [year, month, day] = datePart.split("-");

      // Create the transformed date string
      const transformedDate = `${day}.${month}.${year}`;

      return transformedDate;
    } else {
      // Handle invalid input format
      return "Invalid Date Format";
    }
  }

  return (
    <Link href={full_slug}>
      <motion.div
        layout="position"
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.5, type: "spring" },
        }}
        className={`border-${blok.allocate} relative box-border flex w-full max-w-lg flex-col items-start border-l-4`}
        key={blok._uid}
      >
        <img
          className="ml-2 box-border max-w-full pr-2"
          src={blok.image.filename}
        ></img>
        <h2 className="col-span-3 row-start-3 m-4  text-xl font-medium">
          {blok.headline}
        </h2>
        <h3 className="col-span-3 row-start-3 mx-4 mb-4 line-clamp-2 h-14 text-lg font-medium">
          {blok.subline}
        </h3>
        {blok.date ? (
          <motion.p
            layout="position"
            className={`bg-${blok.allocate} p-2 text-right text-xs font-normal font-semibold text-white`}
          >
            {transformDateFormat(blok.date)}
          </motion.p>
        ) : null}
      </motion.div>
    </Link>
  );
};

export default FeatArticles;
