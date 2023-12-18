"use client";

import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Slider = ({ blok }) => {
  const targetRef = useRef<any>();
  const carousel = useRef<any>();
  let count = 0;
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  let scroll_width_summe = 0;
  let width = window.innerWidth;

  blok.slider.forEach((subblok: any) => {
    if (width >= 768) {
      if (subblok.type === "event") {
        scroll_width_summe += 512 + 16 + 32 + 4;
      } else if (subblok.type === "k-big") {
        scroll_width_summe += 512 + 16 + 48;
      } else if (subblok.type === "k-small") {
        scroll_width_summe += 448 + 16;
      } else {
        // Wenn es etwas anderes ist oder 'k-big' nicht existiert
        scroll_width_summe += 512;
      }
    } else {
      if (subblok.type === "event") {
        scroll_width_summe += 416 + 16 + 32 + 4;
      } else if (subblok.type === "k-big") {
        scroll_width_summe += 416 + 16 + 48;
      } else {
        // Wenn es etwas anderes ist oder 'k-big' nicht existiert
        scroll_width_summe += 480;
      }
    }
  });
  if (blok.slider[0].type == "bewerbung") {
    scroll_width_summe += 64;
  }
  const pre_defined_width = [
    "h-[150vh]",
    "h-[200vh]",
    "h-[250vh]",
    "h-[300vh]",
    "h-[350vh]",
  ];
  scroll_width_summe = scroll_width_summe - width;
  let scroll_width_summe_str = "-" + scroll_width_summe + "px";
  let width_str = width + "px";
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [blok.scroll_start_right ? "0%" : width_str, scroll_width_summe_str],
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
        <table className="my-4 ml-auto w-full sm:w-1/2 md:w-1/3">
          <thead className="mb-4">
            <tr>
              {blok.slider_table?.thead?.map((th: any, index: number) => {
                return (
                  <th
                    className="text-left text-xl font-semibold"
                    key={`${th.value}-${index}`}
                  >
                    {th.value}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="">
            {blok.slider_table?.tbody?.map((tr: any) => {
              return (
                <tr key={tr._uid}>
                  {tr.body?.map((td: any) => {
                    return (
                      <th
                        className="text-left text-lg font-normal"
                        key={td._uid}
                      >
                        {td.value}
                      </th>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="flex h-[80vh] items-center overflow-hidden p-8">
          <div ref={carousel} className="w-screen overflow-visible">
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              style={{ x }}
              className={`flex ${
                blok.alternating
                  ? "[&>*:nth-child(even)]:mt-20 [&>*:nth-child(odd)]:mb-20"
                  : ""
              }
              ${blok.slider[0].type == "bewerbung" ? "" : "gap-4"} `}
            >
              {blok.slider?.map((box: any) => {
                count++;
                if (box.type == "event") {
                  return (
                    <div
                      className={`border-${box.allocate} relative mr-8 flex min-w-[26rem] max-w-[26rem] flex-col items-start justify-start border-l-4 md:min-w-[32rem] md:max-w-[32rem]`}
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
                      className="mr-12 flex min-w-[26rem] max-w-[26rem] flex-col md:min-w-[32rem] md:max-w-[32rem]"
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
                      className="grid min-w-[28rem] max-w-[28rem] grid-cols-3 gap-6"
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
                if (box.type == "bewerbung") {
                  // console.log(count);
                  return (
                    <div
                      className="row-span-1 grid min-w-[26rem] max-w-[26rem] bg-gray-100 md:row-span-2 md:min-w-[32rem] md:max-w-[32rem]"
                      key={box._uid}
                    >
                      <div
                        className={`row-start-1 box-border h-80 border-b-4 border-black p-6 tall:h-96 ${
                          count % 2 !== 0
                            ? "tall:row-start-1 tall:border-b-[3px]"
                            : "tall:row-start-2 tall:border-b-0 tall:border-t-[3px]"
                        }`}
                      >
                        <h1 className="text-4xl font-semibold">
                          {box.headline}
                        </h1>
                        <div className="">{render(box.content)}</div>
                      </div>
                      <div
                        className={`row-start-2 box-border border-black p-6 tall:h-96 ${
                          count % 2 === 0
                            ? "tall:row-start-1 tall:border-b-[3px]"
                            : "tall:row-start-2 tall:border-t-[3px]"
                        } `}
                      ></div>
                    </div>
                  );
                }
                // return (
                //   <div
                //     className="relative flex h-32 min-w-[30rem] items-center justify-center bg-neutral-800 p-10"
                //     key={box._uid}
                //   >
                //     <h3>Bitte setzen sie den richten Typen des Sliders</h3>
                //   </div>
                // );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;