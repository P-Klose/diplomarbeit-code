import React from "react";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import { IFrameProps } from "@/types/interfaces";
import { motion } from "framer-motion";

const IFrameContainer: React.FC<{ blok: IFrameProps }> = ({ blok }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      {...storyblokEditable(blok._editable)}
      className={`mx-auto grid max-w-screen-2xl grid-cols-1 gap-4 p-4 sm:p-6 dark:text-neutral-200`}
    >
      <h2 className="break-words text-2xl font-semibold uppercase md:text-3xl">
        {blok.headline}
      </h2>
      <div className="col-span-1 box-border aspect-video border-2">
        <iframe
          className="h-full w-full"
          src={blok.iframe_content.url}
        ></iframe>
      </div>
      <div className="felx flex-row md:justify-end">
        {blok.links.map((nestedBlok: any) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    </motion.div>
  );
};

export default IFrameContainer;
