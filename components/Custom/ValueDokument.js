"use client";
import { render } from "storyblok-rich-text-react-renderer";
import { motion } from "framer-motion";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
// import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import ValueDokumentEntry from "./ValueDokumentEntry";
const ValueDokument = ({ blok }) => {
  var content_count = 0;
  return (
    <motion.div className="mx-auto max-w-screen-2xl p-4">
      {/* <div className=" float-right w-full bg-white"></div> */}
      <h2 className="p-4 text-2xl font-semibold">{blok.headline}</h2>
      <h3 className="pl-4">{blok.subline}</h3>
      <div className="relative h-full">
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
        <div
          className="shaped-value-document-overlay absolute top-0 hidden h-full w-full sm:block"
          style={{
            background: `linear-gradient(rgba(0,0, 0, 0.6),rgba(0, 0, 0, 0.3)),url(${blok.background_image.filename}) no-repeat bottom center / cover`,
          }}
        ></div>
      </div>
    </motion.div>
  );
};
export default ValueDokument;
