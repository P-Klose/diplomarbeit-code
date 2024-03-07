"use Client";

import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import { FaqCollectionProps, FaqProps } from "@/types/interfaces";
import { render } from "storyblok-rich-text-react-renderer";
import { LayoutGroup, motion } from "framer-motion";
import { useState } from "react";

const FaqCollection: React.FC<{ blok: FaqCollectionProps }> = ({ blok }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="mx-auto grid max-w-screen-2xl gap-4 p-4 sm:p-6 dark:text-neutral-200"
      {...storyblokEditable(blok._editable)}
      id={blok.headline.toLowerCase().replaceAll(" ", "")}
    >
      <h2 className="break-words text-2xl font-semibold uppercase md:text-3xl">
        {blok.headline}
      </h2>
      {blok.description && (
        <div className="prose dark:prose-dark dark:prose-p:text-neutral-200">
          {render(blok.description)}
        </div>
      )}
      <LayoutGroup>
        <div className="grid sm:px-2">
          {isOpen
            ? blok.faqs.map((nestedBlok: FaqProps) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
              ))
            : blok.faqs
                .slice(0, 10)
                .map((nestedBlok: FaqProps) => (
                  <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
                ))}
        </div>
        <motion.button
          layout="position"
          className="max-w-max place-self-start border-l-4 border-neutral-700 bg-neutral-200 bg-opacity-0 p-2 text-base font-normal hover:bg-opacity-25 sm:ml-2 md:text-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "weniger Anzeigen" : "mehr Anzeigen"}
        </motion.button>
      </LayoutGroup>
    </motion.div>
  );
};
export default FaqCollection;
