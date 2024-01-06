import React from "react";
import { storyblokEditable } from "@storyblok/react/rsc";
import { HeadlineProps } from "@/types/interfaces";

const Headline: React.FC<{ blok: HeadlineProps }> = ({ blok }) => {
  return (
    <div
      {...storyblokEditable(blok)}
      className={`col-span-full mx-auto w-full max-w-screen-2xl bg-white p-4 sm:p-6 ${
        blok.no_spacing_y ? "py-0 xs:py-0" : ""
      }`}
    >
      <h2 className="break-words text-2xl font-semibold uppercase md:text-3xl">
        {blok.headline}
      </h2>
    </div>
  );
};

export default Headline;
