"use client";

import { storyblokEditable } from "@storyblok/react/rsc";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import SliderContent from "./SliderContent";
import { HorizontalScrollSliderProps } from "@/types/interfaces";
import { Player } from "@lottiefiles/react-lottie-player";

import * as scrollanimation from "../../animations/pfeil.json";

const Slider: React.FC<{ blok: HorizontalScrollSliderProps }> = ({ blok }) => {
  const targetRef = useRef<any>();
  const carousel = useRef<any>();
  let count = 0;

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const handleScroll = () =>
    window.scrollTo({
      top: height,
      behavior: "smooth",
    });

  const pre_defined_width = [
    "md:h-[150vh]",
    "md:h-[200vh]",
    "md:h-[250vh]",
    "md:h-[300vh]",
    "md:h-[350vh]",
  ];
  const pre_defined_width_factor = [1.5, 2, 2.5, 3, 3.5];

  let scroll_width_summe = 0;
  let width = 1920;
  let height = 1080;
  let ultrawide = false;
  let x;

  if (typeof window !== "undefined") {
    width = window.innerWidth;
    height = window.innerHeight;
    height = height * (pre_defined_width_factor.at(blok.scroll_speed) ?? 1);
    height = height + 56;

    if (width > 1536) {
      scroll_width_summe += (width - 1536) / 2;
    }

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
          scroll_width_summe += 448 + 32;
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

    scroll_width_summe = (scroll_width_summe - width) * -1;
    let scroll_width_summe_str = scroll_width_summe + "px";
    let width_str = width + "px";
    if (scroll_width_summe > 0) {
      ultrawide = true;
    }
    x = useTransform(
      scrollYProgress,
      [0, 1],
      [
        ultrawide ? "0%" : blok.scroll_start_right ? "0%" : width_str,
        ultrawide ? "0%" : scroll_width_summe_str,
      ],
    );
  }
  // Content-Animation mit framer-motion
  const duration = 0.5;
  const variants = {
    visible: {
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration,
        opacity: {
          delay: 0.9,
          duration: 0.5,
        },
      },
    },
    hidden: {
      opacity: 0,
    },
  };
  const variantsHeadline = {
    visible: {
      opacity: 1,
      x: "0",
      transition: {
        ease: "easeInOut",
        duration,
        x: {
          delay: 0.3,
          duration: 0.9,
        },
      },
    },
    hidden: {
      opacity: 0,
      x: "-100%",
    },
  };

  return (
    <section
      {...storyblokEditable(blok._editable)}
      ref={targetRef}
      className={`relative dark:text-neutral-200 ${
        ultrawide ? "md:100vh" : pre_defined_width.at(blok.scroll_speed)
      }`}
      id={blok.title.toLowerCase().replaceAll(" ", "")}
    >
      <div className="sticky top-0 hidden h-screen md:block">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={variantsHeadline}
          className="z-40 mx-auto w-full max-w-screen-2xl px-8 pt-14
          text-start text-5xl font-semibold uppercase sm:text-7xl 2xl:px-0"
        >
          {blok.title}
        </motion.h1>
        {blok.slider_table.thead.length > 0 && (
          <motion.table
            initial="hidden"
            animate="visible"
            variants={variants}
            className="absolute right-0 top-0 my-4 sm:w-1/2 md:w-1/3"
          >
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
          </motion.table>
        )}
        <div className="flex h-[calc(100%-104px)] items-center overflow-hidden p-8">
          <div
            ref={carousel}
            className="mx-auto w-full max-w-screen-2xl overflow-visible"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={variants}
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
              <SliderContent slider={blok.slider}></SliderContent>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="flex flex-col pt-4 xs:px-4 md:hidden">
        <h1 className="pl-4 text-2xl font-semibold uppercase ">{blok.title}</h1>
        {blok.slider_table.thead.length > 0 && (
          <table className="m-4  w-[calc(100%-16px)] ">
            <thead className="mb-4">
              <tr>
                {blok.slider_table?.thead?.map((th: any, index: number) => {
                  return (
                    <th
                      className="text-left text-lg font-semibold"
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
                          className="text-left text-base font-normal"
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
        )}

        <div className="mx-4 my-8 grid grid-cols-1 gap-8 xs:mx-8 md:gap-4 ">
          <SliderContent slider={blok.slider}></SliderContent>
        </div>
      </div>
    </section>
  );
};

export default Slider;
