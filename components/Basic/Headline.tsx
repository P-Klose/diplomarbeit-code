import React from "react";
import { storyblokEditable } from "@storyblok/react/rsc";
import { HeadlineProps } from "@/types/interfaces";
import { motion } from "framer-motion";

const Headline: React.FC<{ blok: HeadlineProps }> = ({ blok }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      {...storyblokEditable(blok._editable)}
      className={`col-span-full mx-auto w-full max-w-screen-2xl bg-white p-4 sm:p-6 ${
        blok.no_spacing_y ? "py-0 xs:py-0" : ""
      }`}
    >
      <h2 className="break-words text-2xl font-semibold uppercase md:text-3xl">
        {blok.headline}
      </h2>
    </motion.div>
  );
};

export default Headline;
