"use client";

import { storyblokEditable } from "@storyblok/react/rsc";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Slider = ({ blok }) => {
  const targetRef = useRef();
  const carousel = useRef();
  const [width, setWidth] = useState(0);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  useEffect(() => {
    setWidth(
      carousel.current.scrollWidth -
        carousel.current.offsetWidth -
        carousel.current.offsetWidth,
    );
    console.log(carousel.current);
  }, []);
  const x = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  return (
    <section
      {...storyblokEditable(blok)}
      ref={targetRef}
      className="relative h-[200vh]"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden p-4">
        <div
          ref={carousel}
          className="mx-auto w-screen max-w-screen-2xl overflow-visible bg-neutral-100"
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            style={{ x }}
            className={`flex gap-4 `}
          >
            {blok.content?.map((box) => {
              return (
                <div
                  className="relative flex h-20 min-w-[30rem] items-center justify-center bg-neutral-800 p-10"
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
