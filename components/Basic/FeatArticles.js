"use client";
// import ArticleTeaser from "./ArticleTeaser";
import {
  apiPlugin,
  getStoryblokApi,
  storyblokInit,
  storyblokEditable,
} from "@storyblok/react/rsc";

import { useState, useEffect } from "react";
import { LayoutGroup } from "framer-motion";
import { motion } from "framer-motion";

storyblokInit({
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin],
});

const AllArticles = ({ blok }) => {
  return (
    <LayoutGroup>
      <section className="mx-auto w-full max-w-screen-2xl">
        <h2 className="pl-6 text-3xl font-medium">{blok.headline}</h2>
        <div className="box-border grid w-full grid-cols-1 gap-12 px-8 py-10 lg:grid-cols-3 [&>*:nth-child(even)]:justify-self-end [&>*:nth-child(odd)]:justify-self-start">
          {/* odd:justify-self-end even:justify-self-start */}
          {blok.articles?.map((article) => {
            //console.log(article);
            return <FeatArticle article={article.content}></FeatArticle>;
            // ;
          })}
        </div>
      </section>
    </LayoutGroup>
  );
};

const FeatArticle = ({ article }) => {
  function transformDateFormat(inputDate) {
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
    <motion.div
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.5, type: "spring" },
      }}
      className={`border-${article.allocate} relative box-border flex w-full max-w-lg flex-col items-start border-l-4`}
      key={article._uid}
    >
      <img
        className="ml-2 box-border max-w-full pr-2"
        src={article.image.filename}
      ></img>
      <h2 className="col-span-3 row-start-3 m-4  text-xl font-medium">
        {article.headline}
      </h2>
      <h3 className="col-span-3 row-start-3 mx-4 mb-4 line-clamp-2 h-14 text-lg font-medium">
        {article.subline}
      </h3>
      {article.date ? (
        <p
          className={`bg-${article.allocate} p-2 text-right text-xs font-normal`}
        >
          {transformDateFormat(article.date)}
        </p>
      ) : null}
    </motion.div>
  );
};

export default AllArticles;
