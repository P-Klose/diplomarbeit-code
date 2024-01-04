import { storyblokEditable } from "@storyblok/react/rsc";
import Link from "next/link";

import MediaIcon from "@/components/Custom/MediaIcon";

const LinkComponent = ({ blok }) => {
  let url = "";
  if (blok.link.linktype == "url") {
    url = blok.link.url;
  } else if (blok.link.linktype == "story") {
    url = "/" + blok.link.cached_url;
  }
  const borderColors = [
    "hover:border-allgemein",
    "hover:border-it-medientechnik",
    "hover:border-informatik-sse",
    "hover:border-elektronik",
    "hover:border-medizintechnik",
    "hover:border-informatik-sse",
    "hover:border-informatik-ddp",
    "hover:border-informatik-csi",
    "hover:border-red-600",
    "hover:border-cyan-300",
    "hover:border-sky-400",
    "hover:border-blue-700",
    "hover:border-amber-500",
    "hover:border-red-400",
    "hover:border-pink-500",
    "hover:border-yellow-350",
    "hover:border-yellow-700",
    "hover:border-red-200",
    "hover:border-orange-950",
    "hover:border-lime-300",
    "hover:border-green-700",
  ];
  const textColors = [
    "text-allgemein",
    "text-it-medientechnik",
    "text-informatik-sse",
    "text-elektronik",
    "text-medizintechnik",
    "text-informatik-sse",
    "text-informatik-ddp",
    "text-informatik-csi",
    "text-red-600",
    "text-cyan-300",
    "text-sky-400",
    "text-blue-700",
    "text-amber-500",
    "text-red-400",
    "text-pink-500",
    "text-yellow-350",
    "text-yellow-700",
    "text-red-200",
    "text-orange-950",
    "text-lime-300",
    "text-green-700",
  ];
  console.log(blok.style);
  return (
    <>
      {blok.style != "h-video" && blok.style != "h-link" ? (
        <Link
          {...storyblokEditable(blok)}
          className={`${
            blok.style == "marquee"
              ? `mx-4 border-x-2 border-white px-2 text-base font-medium text-neutral-400 transition-all duration-500 sm:text-lg lg:text-xl hover:border-${blok.color} hover:text-neutral-700`
              : `text-${blok.color}`
          } flex items-center 
      `}
          href={url}
        >
          <MediaIcon iconName={blok.symbol} />
          {blok.symbol ? <span className="px-1"></span> : null}
          {blok.style == "marquee" ? (
            <>
              {/* <span className={`text-${blok.color} px-1 text-xl font-extrabold`}>
            |
          </span> */}
              {blok.display_name}
              {/* <span className={`text-${blok.color} px-1 text-xl font-extrabold`}>
            |
          </span> */}
            </>
          ) : (
            `${blok.display_name}`
          )}
        </Link>
      ) : null}
      {blok.style == "h-video" ? (
        <div
          className="col-span-3 row-start-2 aspect-video p-4 sm:p-0 sm:pr-4 md:col-span-2 md:pb-4 md:pr-6 lg:col-span-3"
          {...storyblokEditable(blok)}
        >
          <p className="hidden pb-1 sm:block">{blok.display_name}</p>
          <h2 className="pb-3 text-2xl font-semibold uppercase sm:hidden">
            {blok.display_name}
          </h2>
          <iframe
            className="aspect-video w-full"
            src={url}
            title="YouTube video player"
          ></iframe>
        </div>
      ) : null}
      {blok.style == "h-link" ? (
        <div
          className="col-span-2 mx-auto my-auto min-h-max py-2 md:col-span-3 md:py-8 lg:col-span-2 lg:mx-0 lg:pl-6"
          {...storyblokEditable(blok)}
        >
          <div className="w-max bg-gradient-to-r from-elektronik via-medizintechnik to-informatik-sse p-1">
            <Link
              className={`block
          justify-center bg-white p-3 text-xl uppercase transition-all hover:bg-opacity-70 md:text-2xl lg:text-3xl`}
              href={url}
            >
              {blok.display_name}
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default LinkComponent;
