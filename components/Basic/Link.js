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
    "border-allgemein",
    "border-it-medientechnik",
    "border-informatik-sse",
    "border-elektronik",
    "border-medizintechnik",
    "border-informatik-sse",
    "border-informatik-ddp",
    "border-informatik-csi",
    "border-red-600",
    "border-cyan-300",
    "border-sky-400",
    "border-blue-700",
    "border-amber-500",
    "border-red-400",
    "border-pink-500",
    "border-yellow-350",
    "border-yellow-700",
    "border-red-200",
    "border-orange-950",
    "border-lime-300",
    "border-green-700",
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
          ? `mx-4 border-x-4 px-2 text-xl font-semibold text-neutral-400 transition-colors border-${blok.color} hover:text-neutral-700`
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
