import { GridItemProps } from "@/types/interfaces";
import { storyblokEditable } from "@storyblok/react/rsc";
import React from "react";
import Lottie from "react-lottie";
import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";
import * as sseanimation from "../../sse.json";
import * as ddpanimation from "../../ddp.json";

const GridItem: React.FC<{ blok: GridItemProps }> = ({ blok }) => {
  var animationFilePath = null;
  switch (blok.animation) {
    case "informatiksse":
      animationFilePath = sseanimation;
      break;
    case "informatikcsi":
      animationFilePath = sseanimation;
      break;
    case "informatikddp":
      animationFilePath = ddpanimation;
      break;
    default:
      null;
  }
  console.log(animationFilePath);

  console.log(sseanimation);

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationFilePath,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
      animationSpeed: 0.2, 
    },
  };

  if (blok.type == "ausbildung") {
    let url = "";
    if (blok.link.linktype == "url") {
      url = blok.link.url;
    } else if (blok.link.linktype == "story") {
      if (url.startsWith("/")) {
        return;
      } else {
      url = "/" + blok.link.cached_url;
    }
    }

    return (
      <Link
        {...storyblokEditable(blok)}
        href={url}
        className={`grid grid-cols-1 xs:grid-cols-2 ${blok.width} ${
          blok.image_right ? "md:col-start-1" : "md:col-start-2"
        }`}
      >
        <div
          className={`col-span-1 place-items-center border-${
            blok.allocate
          } border-b-8 xs:border-b-0 ${
            blok.image_right
              ? "xs:col-start-2 xs:border-l-[3px] md:border-l-8"
              : "xs:border-r-[3px] md:border-r-8"
          }`}
        >
          {blok.content_type === "animation" ? (
            <Lottie options={defaultOptions} />
          ) : (
            <div>No Animation</div>
          )}
        </div>
        <div
          className={`col-span-1 grid place-items-center p-6 ${
            blok.image_right ? "xs:col-start-1  xs:row-start-1" : ""
          } border-${blok.allocate} md:border-none ${
            blok.image_right ? "xs:border-r-[3px]" : "xs:border-l-[3px]"
          }`}
        >
          <div>
            <h1
              className={`text-center ${
                blok.image_right
                  ? "xs:place-self-end xs:text-right"
                  : "xs:place-self-start xs:text-left"
              } text-lg font-semibold md:text-xl xl:text-2xl`}
            >
              {blok.headline}
            </h1>
            <h2
              className={`text-center ${
                blok.image_right
                  ? "xs:place-self-end xs:text-right"
                  : "xs:place-self-start xs:text-left"
              } text-base font-normal md:text-lg xl:text-xl`}
            >
              {blok.subline}
            </h2>
          </div>
        </div>
      </Link>
    );
  }
  // if (blok.type == "ausbildung-content-y") {
  //   return (
  //     <div
  //       {...storyblokEditable(blok)}
  //       className={`flex flex-row md:col-span-3`}
  //     >
  //       <img
  //         className="min-w-[33%] 2xl:min-w-[66%] 2xl:-translate-x-1/3"
  //         src={blok.main_image.filename}
  //       ></img>
  //       <div className="min-w-[66%] max-w-[66%] p-4 2xl:-translate-x-1/3">
  //         <h3 className="hidden pb-3 text-xl font-semibold md:inline-block md:text-2xl">
  //           {blok.headline}
  //         </h3>
  //         {render(blok.content)}
  //       </div>
  //     </div>
  //   );
  // }
};

export default GridItem;
