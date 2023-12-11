"use client";

import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const SelectSlider = ({ blok }) => {
  const targetRef = useRef();
  const carousel = useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  let scroll_width_summe = 0;
  let width = window.innerWidth;

  blok.slider.forEach((subblok) => {
    if (width >= 768) {
      scroll_width_summe += 512 + 16 + 32 + 4;
    } else {
      scroll_width_summe += 416 + 16 + 32 + 4;
    }
  });
  const pre_defined_width = [
    "h-[150vh]",
    "h-[200vh]",
    "h-[250vh]",
    "h-[300vh]",
    "h-[350vh]",
  ];
  scroll_width_summe = scroll_width_summe - width;
  scroll_width_summe = "-" + scroll_width_summe + "px";
  width = width + "px";
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [blok.scroll_start_right ? "0%" : width, scroll_width_summe],
  );
  return (
    <section
      {...storyblokEditable(blok)}
      ref={targetRef}
      className={`relative ${pre_defined_width.at(blok.scroll_speed)}`}
    >
      <div className="sticky top-0  h-screen ">
        <h1 className="px-8 pt-8 text-center text-5xl font-bold uppercase sm:text-end sm:text-7xl">
          {blok.title}
        </h1>
        <div className="flex h-[80vh] items-center overflow-hidden p-4">
          <div ref={carousel} className="w-screen overflow-visible">
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              style={{ x }}
              className={`flex ${
                blok.alternating
                  ? "[&>*:nth-child(even)]:mt-20 [&>*:nth-child(odd)]:mb-20"
                  : ""
              }  gap-4 `}
            >
              {blok.slider?.map((boxinfo) => {
                let box = boxinfo.content;
                if (box.type == "event") {
                  return (
                    <div
                      className={`border-${box.allocate} relative mr-8 flex min-w-[26rem] max-w-[26rem] flex-col items-start justify-start border-l-4 md:min-w-[32rem] md:max-w-[32rem]`}
                      key={box._uid}
                    >
                      <img
                        className="border-box ml-2 max-w-full "
                        src={box.image.filename}
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
                // if (box.type == "k-big") {
                //   return (
                //     <div
                //       className="mr-12 flex min-w-[26rem] max-w-[26rem] flex-col md:min-w-[32rem] md:max-w-[32rem]"
                //       key={box._uid}
                //     >
                //       <div
                //         className={`mb-4 h-5 w-1/4 bg-${box.allocate}`}
                //       ></div>
                //       <h2 className="h-14 w-full text-lg uppercase">
                //         {box.headline}
                //       </h2>
                //       <div className="grid h-full grid-cols-4">
                //         <div className="col-span-2 flex h-full flex-col justify-between">
                //           <div className="flex h-1/2 flex-col justify-around">
                //             <h3>{box.subline}</h3>
                //           </div>
                //           <div className="felx flex-col justify-around">
                //             {render(box.content)}
                //           </div>
                //         </div>
                //         <div className="col-span-2">
                //           <img
                //             className="h-full max-w-full"
                //             src={box.main_image.filename}
                //           ></img>
                //         </div>
                //       </div>
                //     </div>
                //   );
                // }
                // if (box.type == "k-small") {
                //   return (
                //     <div
                //       className="grid min-w-[28rem] max-w-[28rem] grid-cols-3 gap-6"
                //       key={box._uid}
                //     >
                //       <div className="col-span-1">
                //         <img
                //           className="h-full max-w-full"
                //           src={box.main_image.filename}
                //         ></img>
                //       </div>
                //       <div className="col-span-2 flex flex-col items-start justify-end">
                //         <h2 className="h-14 text-lg uppercase">
                //           {box.headline}
                //         </h2>
                //         <h3>{box.subline}</h3>
                //       </div>
                //     </div>
                //   );
                // }
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectSlider;
