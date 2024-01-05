"use client";

import { storyblokEditable } from "@storyblok/react/rsc";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const Slider = ({ blok }) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <motion.div
      ref={carousel}
      className="mx-auto max-w-screen-xl cursor-grab overflow-hidden"
      whileTap={{ cursor: "grabbing" }}
      {...storyblokEditable(blok)}
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="flex gap-4"
      >
        {blok.content?.map((box) => {
          return (
            <motion.div className="flex h-20 min-w-[30rem] items-center justify-center bg-gray-100 p-10">
              <h3>BOX</h3>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Slider;
