"use client";

import { Player } from "@lottiefiles/react-lottie-player";
import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import * as startanimation from "../../startanimation.json";
import * as biggerstartanimation from "../../startanimation-3zu4.json";
import Carousel from "./Carousel";
import React from "react";
import SliderContent from "./SliderContent";
import Link from "next/link";
import { HorizontalScrollSelectSliderProps } from "@/types/interfaces";

const mapBlokSliderToSliderContent = (blokSlider: any) => {
  return blokSlider.map((boxInfo: any) => {
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

const SelectSlider: React.FC<{ blok: HorizontalScrollSelectSliderProps }> = ({
  blok,
}) => {
  const player = React.createRef();
  const targetRef = useRef<any>();
  const carousel = useRef<any>();
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Berechung der x Position (start und endpunkt der Animation)
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
  scroll_width_summe = (scroll_width_summe - width) * -1;
  if (blok.show_title_animation) {
    scroll_width_summe -= 125;
  }
  let scroll_width_summe_str = scroll_width_summe + "px";
  let width_str = width + "px";
  if (scroll_width_summe > 0) {
    ultrawide = true;
  }
  // Scroll Animation
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [
      ultrawide ? "0%" : blok.scroll_start_right ? "0%" : width_str,
      ultrawide ? "0%" : scroll_width_summe_str,
    ],
  );
  // Content-Animation mit framer-motion
  const duration = 0.5;
  const startAnimationDuration = 1.6;
  const variantsNormal = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  const variantsStartAnimation = {
    visible: {
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration,
        opacity: {
          delay: startAnimationDuration,
        },
      },
    },
    hidden: {
      opacity: 0,
    },
  };
  const variantsStartAnimationHeadline = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeInOut",
        duration,
        opacity: {
          delay: startAnimationDuration,
        },
        x: {
          delay: startAnimationDuration,
          duration: 0.7,
        },
      },
    },
    hidden: {
      opacity: 0,
      x: "-100%",
    },
  };
  let variants = variantsNormal;
  let headlineVarients = variantsNormal;
  if (blok.show_title_animation) {
    variants = variantsStartAnimation;
    headlineVarients = variantsStartAnimationHeadline;
  }

  return (
    <section
      {...storyblokEditable(blok)}
      ref={targetRef}
      className={`relative ${
        ultrawide ? "md:100vh" : pre_defined_width.at(blok.scroll_speed)
      }`}
    >
      <div className="sticky top-0 hidden h-screen md:block">
        <div
          className={`absolute right-0 top-0 z-10 hidden h-full w-screen items-center justify-end md:my-4 md:flex`}
        >
          <Player
            loop={false}
            autoplay={true}
            src={biggerstartanimation}
            keepLastFrame={true}
            // style={{
            //   maxHeight: "100vh",
            // }}
            speed={1}
          ></Player>
        </div>
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={headlineVarients}
          className="absolute top-0 z-40 px-8 pt-8 text-center text-5xl font-semibold uppercase sm:text-start sm:text-7xl"
        >
          {blok.title}
        </motion.h1>
        <div className="flex h-full items-center overflow-hidden p-4">
          <div ref={carousel} className="w-screen overflow-visible">
            <motion.div
              drag="x"
              initial="hidden"
              animate="visible"
              variants={variants}
              dragConstraints={{ right: 0, left: -width }}
              style={{ x }}
              className={`flex gap-4`}
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

            if (box.type == "event") {
              return (
                <Link
                  className="z-10 w-full flex-shrink-0"
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
