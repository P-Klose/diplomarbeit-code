"use client";
import { render } from "storyblok-rich-text-react-renderer";
import { motion } from "framer-motion";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
// import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import ValueDokumentEntry from "./ValueDokumentEntry";
const ValueDokument = ({ blok }) => {
  var content_count = 0;
  return (
    <motion.div className="mx-auto max-w-screen-2xl">
      {/* <div className=" float-right w-full bg-white"></div> */}
      <h2 className="p-4 text-2xl font-semibold">{blok.headline}</h2>
      <h3 className="">{blok.subline}</h3>
      <div className="shaped-value-document">
        {blok.content?.map((nestedBlok) => {
          content_count = content_count + 1;

          return (
            <ValueDokumentEntry
              key={nestedBlok._uid}
              blok={nestedBlok}
              count={content_count}
            ></ValueDokumentEntry>
          );
        })}
      </div>
    </motion.div>
  );
};
export default ValueDokument;
