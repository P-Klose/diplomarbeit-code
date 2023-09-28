"use client";

import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Slider = ({ blok }) => {
  const targetRef = useRef();
  const carousel = useRef();
  const [width, setWidth] = useState(0);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  // console.log(blok.scroll_width);
  useEffect(() => {
    setWidth(
      carousel.current.scrollWidth -
        carousel.current.offsetWidth -
        carousel.current.offsetWidth,
    );
  }, []);
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [blok.scroll_start_right ? "0%" : "100%", blok.scroll_width],
  );
  return (
    <section
      {...storyblokEditable(blok)}
      ref={targetRef}
      className="relative h-[200vh]"
    >
      <div className="sticky top-0 h-screen">
        <h1 className="px-8 pt-8 text-end text-7xl font-bold uppercase">
          {blok.title}
        </h1>
        <div className="flex h-full items-center overflow-hidden p-4">
          <div ref={carousel} className="mx-6 w-screen overflow-visible">
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              style={{ x }}
              className={`flex gap-4 `}
            >
              {blok.content?.map((box) => {
                if (box.type == "event") {
                  return (
                    <div
                      className={`border-${box.allocate} relative mr-8 flex min-w-[32rem] max-w-[32rem] flex-col items-start justify-start border-l-4`}
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
                      className="mr-12 flex min-w-[32rem] max-w-[32rem] flex-col"
                      key={box._uid}
                    >
                      <div
                        className={`mb-4 h-5 w-1/4 bg-${box.allocate}`}
                      ></div>
                      <h2 className="h-14 w-full text-lg uppercase">
                        {box.headline}
                      </h2>
                      <div className="grid h-full grid-cols-4">
                        <div className="col-span-2 flex h-full flex-col justify-between">
                          <div className="flex h-1/2 flex-col justify-around">
                            <h3>{box.subline}</h3>
                          </div>
                          <div className="felx flex-col justify-around">
                            {render(box.content)}
                          </div>
                        </div>
                        <div className="col-span-2">
                          <img
                            className="h-full max-w-full"
                            src={box.main_image.filename}
                          ></img>
                        </div>
                      </div>
                    </div>
                  );
                }

                if (box.type == "k-small") {
                  return (
                    <div
                      className="mr-8 grid min-w-[32rem] max-w-[32rem] grid-cols-3 gap-6"
                      key={box._uid}
                    >
                      <div className="col-span-1">
                        <img
                          className="h-full max-w-full"
                          src={box.main_image.filename}
                        ></img>
                      </div>
                      <div className="col-span-2 flex flex-col items-start justify-end">
                        <h2 className="h-14 text-lg uppercase">
                          {box.headline}
                        </h2>
                        <h3>{box.subline}</h3>
                      </div>
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
      </div>
    </section>
  );
};

export default Slider;
