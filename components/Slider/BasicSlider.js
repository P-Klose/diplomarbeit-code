"use client";

import { IFrameProps } from "@/types/interfaces";
import { storyblokEditable } from "@storyblok/react/rsc";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { render } from "storyblok-rich-text-react-renderer";

const BasicSlider = ({ blok }) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <div className="mx-auto max-w-screen-2xl p-4 sm:p-6">
      <h2 className="break-words pb-3 text-2xl font-semibold uppercase md:text-3xl">
        {blok.headline}
      </h2>
      <motion.div
        ref={carousel}
        className="cursor-grab overflow-hidden sm:p-2"
        whileTap={{ cursor: "grabbing" }}
        {...storyblokEditable(blok._editable)}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex gap-4 sm:gap-8 md:gap-12"
        >
          {blok.content?.map((box) => {
            return (
              <motion.div
                key={box._uid}
                className="grid w-full min-w-80 flex-shrink-0 grid-cols-1 items-center justify-center border-l-4 border-black transition-all hover:bg-neutral-100 md:max-w-screen-sm"
              >
                <iframe
                  className="aspect-video w-full"
                  src={box.iframe_content.url}
                ></iframe>
                <h3 className="py-2 pl-2 text-lg font-medium">
                  {box.headline}
                </h3>
                <div className="prose py-2 pl-2 prose-p:m-0 prose-p:my-1 prose-p:text-base">
                  {render(box.additional_info)}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BasicSlider;
