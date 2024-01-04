"use client";

import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Carousel from "./Carousel";
import SliderContent from "./SliderContent";
import Link from "next/link";

const mapBlokSliderToSliderContent = (blokSlider) => {
  return blokSlider.map((boxInfo) => {
    let box = boxInfo.content;
    return {
      type: box.type,
      allocate: box.allocate,
      _uid: box._uid,
      image: { filename: box.image.filename },
      headline: box.headline,
      subline: box.subline,
      content: box.content,
      main_image: box.main_image,
      full_slug: boxInfo.full_slug,
    };
  });
};

const SelectSlider = ({ blok }) => {
  const targetRef = useRef<any>();
  const carousel = useRef<any>();
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  let scroll_width_summe = 0;
  let width = window.innerWidth;
  let ultrawide = false;

  blok.slider.forEach((subblok: any) => {
    if (width >= 768) {
      scroll_width_summe += 512 + 16 + 32 + 4;
    } else {
      scroll_width_summe += 416 + 16 + 32 + 4;
    }
  });
  const pre_defined_width = [
    "md:h-[150vh]",
    "md:h-[200vh]",
    "md:h-[250vh]",
    "md:h-[300vh]",
    "md:h-[350vh]",
  ];
  //scroll_width_summe = startpoint (distance from right)
  //width = endpoint (distance from right)
  scroll_width_summe = (scroll_width_summe - width) * -1;
  let scroll_width_summe_str = scroll_width_summe + "px";
  let width_str = width + "px";
  if (scroll_width_summe > 0) {
    ultrawide = true;
  }
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [
      ultrawide ? "0%" : blok.scroll_start_right ? "0%" : width_str,
      ultrawide ? "0%" : scroll_width_summe_str,
    ],
  );

  return (
    <section
      {...storyblokEditable(blok)}
      ref={targetRef}
      className={`relative ${
        ultrawide ? "md:100vh" : pre_defined_width.at(blok.scroll_speed)
      }`}
    >
      <div className="sticky top-0 hidden h-screen md:block">
        <h1 className="px-8 pt-8 text-center text-5xl font-semibold uppercase sm:text-end sm:text-7xl">
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
              {SliderContent({
                slider: mapBlokSliderToSliderContent(blok.slider),
              })}
            </motion.div>
          </div>
        </div>
      </div>

      <h1 className="p-4 pl-8 text-2xl font-semibold uppercase md:hidden">
        {blok.title}
      </h1>
      <div
        className="mx-12 md:hidden"
        //className="mx-12 grid grid-cols-1 gap-4 md:hidden" // use this and the commented code below to just display the elements in a column
      >
        <Carousel>
          {blok.slider?.map((boxinfo: any) => {
            let box = boxinfo.content;
            // console.log(boxinfo);

            if (box.type == "event") {
              return (
                <Link
                  className="z-50 w-full flex-shrink-0"
                  href={boxinfo.full_slug}
                  key={box._uid}
                >
                  <div
                    className={`border-${box.allocate} box-border flex w-full flex-shrink-0 flex-col items-start justify-start border-l-4 bg-white`}
                  >
                    <img
                      className="box-border w-full max-w-full border-l-8 border-transparent "
                      src={box.image.filename}
                      alt={box.headline}
                    />
                    <h2 className="m-4 text-lg font-medium">{box.headline}</h2>
                    <p
                      className={`bg-${box.allocate} p-2 text-right text-xs font-normal`}
                    >
                      {box.subline}
                    </p>
                  </div>
                </Link>
              );
            }
            return null; // Skip rendering for other elements
          })}
        </Carousel>

        {/* {blok.slider?.map((boxinfo: any) => {
          let box = boxinfo.content;
          if (box.type == "event") {
            return (
              <div
                className={`border-${box.allocate} relative col-span-full box-border flex flex-col items-start justify-start border-l-4`}
                key={box._uid}
              >
                <img
                  className="border-box ml-2 w-full max-w-full"
                  src={box.image.filename}
                ></img>
                <h2 className="m-4 text-lg font-medium">{box.headline}</h2>
                <p
                  className={`bg-${box.allocate} p-2 text-right text-xs font-normal`}
                >
                  {box.subline}
                </p>
              </div>
            );
          }
        })} */}
      </div>
    </section>
  );
};

export default SelectSlider;
