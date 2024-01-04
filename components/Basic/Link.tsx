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
  const borderLColors = [
    "border-l-allgemein",
    "border-l-it-medientechnik",
    "border-l-informatik-sse",
    "border-l-elektronik",
    "border-l-medizintechnik",
    "border-l-informatik-sse",
    "border-l-informatik-ddp",
    "border-l-informatik-csi",
    "border-l-red-600",
    "border-l-cyan-300",
    "border-l-sky-400",
    "border-l-blue-700",
    "border-l-amber-500",
    "border-l-red-400",
    "border-l-pink-500",
    "border-l-yellow-350",
    "border-l-yellow-700",
    "border-l-red-200",
    "border-l-orange-950",
    "border-l-lime-300",
    "border-l-green-700",
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
  const bgColors = [
    "bg-allgemein",
    "bg-it-medientechnik",
    "bg-informatik-sse",
    "bg-elektronik",
    "bg-medizintechnik",
    "bg-informatik-sse",
    "bg-informatik-ddp",
    "bg-informatik-csi",
    "bg-red-600",
    "bg-cyan-300",
    "bg-sky-400",
    "bg-blue-700",
    "bg-amber-500",
    "bg-red-400",
    "bg-pink-500",
    "bg-yellow-350",
    "bg-yellow-700",
    "bg-red-200",
    "bg-orange-950",
    "bg-lime-300",
    "bg-green-700",
  ];
  return (
    <>
      {blok.style == "text-nav-base" ||
      blok.style == "marquee" ||
      blok.style == "" ||
      blok.style == undefined ? (
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
          {blok.display_name}
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
      {blok.style == "default" ? (
        <Link
          {...storyblokEditable(blok)}
          className={`mb-2 block border-l-4 border-l-${blok.color} bg-${blok.color} bg-opacity-0 p-2 no-underline transition-all hover:bg-opacity-25`}
          href={url}
        >
          {blok.display_name}
        </Link>
      ) : null}
    </>
  );
};

export default LinkComponent;
