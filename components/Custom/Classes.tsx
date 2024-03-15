"use client";

import { motion } from "framer-motion";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ClassesProps } from "@/types/interfaces";
import { Select } from "./Select";
import { useEffect, useState } from "react";

const ClassesOverview: React.FC<{ blok: ClassesProps }> = ({ blok }) => {
  const searchParams = useSearchParams();

  const selectedClassStr = searchParams.get("class");
  var selectedClass = blok.classes.find(
    (subject: any) => subject.classname.toLowerCase() === selectedClassStr,
  );
  if (selectedClass == undefined) {
    selectedClass = blok.classes[0];
  }
  var otherClasses = [];
  var index = blok.classes.indexOf(selectedClass);
  var length = blok.classes.length - 1;
  if (index == 0) {
    otherClasses.push(blok.classes[++index]);
    otherClasses.push(blok.classes[length]);
  } else if (index == length) {
    otherClasses.push(blok.classes[0]);
    otherClasses.push(blok.classes[--index]);
  } else {
    otherClasses.push(blok.classes[index + 1]);
    otherClasses.push(blok.classes[index - 1]);
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      {...storyblokEditable(blok._editable)}
      className="mx-auto max-w-screen-2xl p-4 sm:p-6 dark:text-neutral-200"
      id={blok.headline.toLowerCase().replaceAll(" ", "")}
    >
      <h2 className="pb-3 text-2xl font-semibold uppercase md:text-3xl">
        {blok.headline}
      </h2>
      <div className="flex flex-row flex-wrap pb-2">
        <Select
          options={blok.classes.map((e) => e.classname)}
          selected={selectedClass.classname}
          elementId={blok.headline.toLowerCase().replaceAll(" ", "")}
        ></Select>
        {/* {blok.classes?.map((nestedBlok: any) => {
          return (
            <Link
              href={`?class=${nestedBlok.classname.toLowerCase()}&#classes`}
              className="px-4 py-2 text-sm uppercase md:text-base"
              key={nestedBlok._uid}
            >
              {nestedBlok.classname}
            </Link>
          );
        })} */}
      </div>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4">
        <img
          className="col-span-2 row-span-2 md:col-span-2"
          src={selectedClass.img.filename}
          alt={`Klassenfoto der ${selectedClass.classname}`}
        ></img>
        {otherClasses.map((nestedClass) => {
          return (
            <Link
              className="col-span-1 self-stretch bg-neutral-100 dark:bg-neutral-800"
              href={`?class=${nestedClass.classname.toLowerCase()}&#classes`}
              key={nestedClass._uid}
            >
              <div className="flex h-full items-center justify-center p-4 text-base font-medium uppercase xs:text-lg md:p-6 md:text-xl">
                {nestedClass.classname}
              </div>
            </Link>
          );
        })}
      </div>
    </motion.section>
  );
};
export default ClassesOverview;
