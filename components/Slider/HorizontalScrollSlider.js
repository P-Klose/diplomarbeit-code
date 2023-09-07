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
          className="mx-6 w-screen overflow-visible bg-neutral-100"
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            style={{ x }}
            className={`flex gap-4`}
          >
            {blok.content?.map((box) => {
              if (box.type == "event") {
                return (
                  <div
                    className={`border-${box.allocate} relative mr-4 flex min-w-[25rem] max-w-[32rem] flex-col items-start justify-start border-l-4`}
                    key={box._uid}
                  >
                    <img
                      className="border-box ml-2 max-w-full "
                      src={box.main_image.filename}
                    ></img>
                    <h2 className="col-span-3 row-start-3 m-4 text-lg font-medium">
                      {box.headline}
                    </h2>
                    <p
                      className={`bg-${box.allocate} p-2 text-right text-xs font-normal`}
                    >
                      {box.subline}
                    </p>
                  </div>
                );
              }

              if (box.type == "k-big") {
                return (
                  <div
                    className="relative flex h-32 min-w-[30rem] items-center justify-center bg-neutral-800 p-10"
                    key={box._uid}
                  >
                    <h3>Kontakt Big</h3>
                  </div>
                );
              }

              if (box.type == "k-small") {
                return (
                  <div
                    className="relative flex h-32 min-w-[30rem] items-center justify-center bg-neutral-800 p-10"
                    key={box._uid}
                  >
                    <h3>Kontakt Small</h3>
                  </div>
                );
              }

              return (
                <div
                  className="relative flex h-32 min-w-[30rem] items-center justify-center bg-neutral-800 p-10"
                  key={box._uid}
                >
                  <h3>Bitte setzen sie den richten Typen des Sliders</h3>
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
