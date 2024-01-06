import React from "react";
import { storyblokEditable } from "@storyblok/react/rsc";

const Spacer: React.FC<{ blok: any }> = ({ blok }) => {
  const padding = [
    "p-2",
    "p-4",
    "p-6",
    "p-8",
    "sm:p-4",
    "sm:p-6",
    "sm:p-8",
    "sm:p-10",
  ];
  return <p className={`p-${blok.size} sm:p-${blok.size}`}></p>;
};

export default Spacer;
