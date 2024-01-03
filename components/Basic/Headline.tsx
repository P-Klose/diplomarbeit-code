import React from "react";
import { storyblokEditable } from "@storyblok/react/rsc";

interface HeadlineProps {
  blok: {
    headline: string;
  };
}

const Headline: React.FC<HeadlineProps> = ({ blok }) => {
  return (
    <div
      {...storyblokEditable(blok)}
      className="col-span-full mx-auto w-full max-w-screen-2xl bg-white p-4"
    >
      <h2 className="break-words text-2xl font-semibold uppercase xs:pl-4 md:text-3xl">
        {blok.headline}
      </h2>
    </div>
  );
};

export default Headline;
