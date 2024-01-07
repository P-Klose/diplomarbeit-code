"use client";
import { render } from "storyblok-rich-text-react-renderer";
import { motion } from "framer-motion";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
// import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import ValueDokumentEntry from "./ValueDokumentEntry";
import { ValueDocumentProps } from "@/types/interfaces";

const ValueDokument: React.FC<{ blok: ValueDocumentProps }> = ({ blok }) => {
  var content_count = 0;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      {...storyblokEditable(blok)}
      className="mx-auto max-w-screen-2xl py-4"
    >
      {/* <div className=" float-right w-full bg-white"></div> */}
      <h2 className="px-4 pb-3 text-2xl font-semibold uppercase sm:px-6 md:text-3xl">
        {blok.headline}
      </h2>
      <h3 className="pl-4 text-lg font-medium sm:pl-6 ">{blok.subline}</h3>
      <div className="relative h-full">
        <div className="shaped-value-document">
          {blok.content?.map((nestedBlok: any) => {
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
