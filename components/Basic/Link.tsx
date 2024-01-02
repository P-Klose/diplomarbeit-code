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
  return (
    <Link
      {...storyblokEditable(blok)}
      className={`${
        blok.style == "marquee"
          ? `mx-4 border-x-2 border-white px-2 text-base font-medium text-neutral-400 transition-all duration-500 sm:text-lg lg:text-xl hover:border-${blok.color} hover:text-neutral-700`
          : `text-${blok.color}`
      } flex items-center`}
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
  );
};

export default LinkComponent;
