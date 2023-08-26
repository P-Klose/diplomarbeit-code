"use client";

import { storyblokEditable } from "@storyblok/react/rsc";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Slider = ({ blok }) => {
  const targetRef = useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  return (
    <section ref={targetRef} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden p-4">
        <div className="max-w-screen-2xl w-screen mx-auto overflow-visible bg-neutral-100">
          <motion.div style={{ x }} className="flex gap-4">
            {blok.content?.map((box) => {
              return (
                <div
                  className="relative flex justify-center items-center h-20 min-w-[30rem] p-10 bg-neutral-800"
                  key={box._uid}
                >
                  <h3>BOX</h3>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
