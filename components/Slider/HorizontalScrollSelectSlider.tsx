"use client";

import { Player } from "@lottiefiles/react-lottie-player";
import { storyblokEditable } from "@storyblok/react/rsc";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import * as biggerstartanimation from "../../animations/startanimation-3zu4.json";
import * as scrollanimation from "../../animations/pfeil.json";
import Carousel from "./Carousel";
import React from "react";
import SliderContent from "./SliderContent";
import Link from "next/link";
import { HorizontalScrollSelectSliderProps } from "@/types/interfaces";
import { transformDateFormat } from "@/util/date";

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
      date: box.date,
    };
  });
};

const SelectSlider: React.FC<{ blok: HorizontalScrollSelectSliderProps }> = ({
  blok,
}) => {
  const targetRef = useRef<any>();
  const carousel = useRef<any>();
  const [sliderContent, setSliderContent] = useState<any[]>([]);
  const sliderCount = blok.loadNews ? 5 : blok.slider.length;

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  useEffect(() => {
    if (blok.loadNews) {
      getNews("news");
    } else {
      setSliderContent(blok.slider);
    }
  }, []);

  useEffect(() => {
    console.log(sliderContent);
  }, [sliderContent]);

  const getNews = async (startsWith: string) => {
    const storyblokApiBaseUrl = "https://api.storyblok.com/v2/cdn/stories";
    const storyblokToken = process.env.storyblokApiToken; // replace with your actual Storyblok token

    const queryString = new URLSearchParams({
      is_startpage: "false",
      starts_with: startsWith,
      sort_by: "content.date:desc",
      per_page: "5",
    });

    const apiUrl = `${storyblokApiBaseUrl}?${queryString.toString()}&token=${storyblokToken}`;

    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        next: { revalidate: 0 },
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setSliderContent(data.stories);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };
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

  // Berechung der x Position (start und endpunkt der Animation)
  let scroll_width_summe = 0;
  let x;
  let ultrawide = false;
  let width = 1920;
  let height = 1080;

  if (typeof window !== "undefined") {
    width = window.innerWidth;
    height = window.innerHeight;
    height = height * (pre_defined_width_factor.at(blok.scroll_speed) ?? 1);
    height = height + 56;

    // Set x Spacing for content to match the rest of the site
    if (width > 1536) {
      scroll_width_summe += (width - 1536) / 2;
    }

    // Calc with of Content Blocks
    for (let i = 0; i < sliderCount; i++) {
      if (width >= 768) {
        scroll_width_summe += 512 + 16 + 32 + 4;
      } else {
        scroll_width_summe += 416 + 16 + 32 + 4;
      }
    }
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
  const startAnimationDuration = 1.6;
  const variantsNormal = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  const variantsStartAnimation = {
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        ease: "easeInOut",
        x: {
          duration: 1.3,
          delay: 2.3,
        },
      },
    },
    hidden: {
      x: "100%",
      opacity: 1,
    },
  };
  const variantsStartAnimationHeadline = {
    visible: {
      opacity: 1,
      x: "0",
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
      {...storyblokEditable(blok._editable)}
      ref={targetRef}
      className={`relative dark:text-neutral-200 ${
        ultrawide ? "md:100vh" : pre_defined_width.at(blok.scroll_speed)
      }`}
      id={blok.title.toLowerCase().replaceAll(" ", "")}
    >
      <div className="sticky top-0 hidden h-screen overflow-hidden md:block">
        <div
          className={`pointer-events-none absolute right-0 top-0 z-10 hidden h-full w-screen items-center justify-end md:my-4 md:flex`}
        >
          <Player
            loop={false}
            autoplay={true}
            src={biggerstartanimation}
            keepLastFrame={true}
            speed={1}
          ></Player>
        </div>
        <motion.div
          initial={{ opacity: 0, translateY: 50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className={`absolute top-0 hidden h-full w-full items-end justify-center pb-10 md:flex`}
        >
          <button
            onClick={handleScroll}
            className="pointer-events-auto z-50"
            role="button"
          >
            <Player
              loop={true}
              autoplay={true}
              src={scrollanimation}
              style={{ height: "50px", width: "50px" }}
              speed={1}
            ></Player>
          </button>
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={headlineVarients}
          className="z-40 mx-auto w-full max-w-screen-2xl px-8 pt-14
          text-start text-5xl font-semibold uppercase sm:text-7xl 2xl:px-0"
        >
          {blok.title}
        </motion.h1>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          className="flex h-[calc(100%-104px)] items-center overflow-hidden p-4"
        >
          <div
            ref={carousel}
            className="mx-auto w-full max-w-screen-2xl overflow-visible"
          >
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              style={{ x }}
              className={`flex gap-4`}
            >
              {SliderContent({
                slider: mapBlokSliderToSliderContent(sliderContent),
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>

      <h1 className="p-4 text-2xl font-semibold uppercase md:hidden">
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
                  {...storyblokEditable(box._editable)}
                  href={boxinfo.full_slug}
                  key={box._uid}
                  className="z-10 w-full flex-shrink-0 "
                >
                  <div
                    className={`border-${box.allocate} box-border flex w-full flex-shrink-0 flex-col items-start justify-start border-l-4 bg-white dark:bg-neutral-900 dark:text-neutral-200`}
                  >
                    <img
                      className="box-border w-full max-w-full border-l-8 border-transparent "
                      src={`${box.image.filename}/m/0x400`}
                      alt={box.image.alt}
                    ></img>
                    <h2 className="m-4 text-lg font-medium">{box.headline}</h2>
                    {box.date && (
                      <p
                        className={`bg-${box.allocate} p-2 text-right text-xs font-normal`}
                      >
                        {transformDateFormat(box.date)}
                      </p>
                    )}
                  </div>
                </Link>
              );
            }
            return null; // Skip rendering for other elements
          })}
        </Carousel>
      </div>
    </section>
  );
};

export default SelectSlider;
