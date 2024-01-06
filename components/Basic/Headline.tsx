import React from "react";
import { storyblokEditable } from "@storyblok/react/rsc";
import { HeadlineProps } from "@/types/interfaces";

const Headline: React.FC<{ blok: HeadlineProps }> = ({ blok }) => {
  return (
    <div
      {...storyblokEditable(blok)}
      className="col-span-full mx-auto w-full max-w-screen-2xl bg-white p-4 xs:p-6"
    >
      <h2 className="break-words text-2xl font-semibold uppercase md:text-3xl">
        {blok.headline}
      </h2>
    </div>
  );
};

export default Headline;
