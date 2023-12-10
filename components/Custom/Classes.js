"use client";

import { motion } from "framer-motion";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

// import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

const ClassesOverview = ({ blok }) => {
  const searchParams = useSearchParams();
  const selectedClassStr = searchParams.get("class");
  var selectedClass = blok.classes.find(
    (subject) => subject.classname.toLowerCase() === selectedClassStr,
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
      {...storyblokEditable(blok)}
      className="mx-auto max-w-screen-2xl p-4"
    >
      <h2 className="p-4 pb-3 text-3xl font-semibold uppercase">
        {blok.headline}
      </h2>
      <div className="flex flex-row">
        {blok.classes?.map((nestedBlok) => {
          return (
            <Link
              href={`?class=${nestedBlok.classname.toLowerCase()}`}
              className="m-4 uppercase"
              key={nestedBlok._uid}
            >
              {nestedBlok.classname}
            </Link>
          );
        })}
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        <img
          className="col-span-2 row-span-2 md:col-span-2"
          src={selectedClass.img.filename}
          alt={`Klassenfoto der ${selectedClass.classname}`}
        ></img>
        {otherClasses.map((nestedClass) => {
          return (
            <Link
              className="col-span-1 self-stretch bg-neutral-100"
              href={`?class=${nestedClass.classname.toLowerCase()}`}
              key={nestedClass._uid}
            >
              <div className="flex h-full items-center justify-center p-6 text-xl font-medium uppercase">
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
