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
  const colors = [
    "text-allgemein",
    "text-it-medientechnik",
    "text-informatik-sse",
    "text-elektronik",
    "text-medizintechnik",
    "text-informatik-sse",
    "text-informatik-ddp",
    "text-informatik-csi",
  ];
  return (
    <Link
      {...storyblokEditable(blok)}
      className={`${
        blok.style == "marquee"
          ? "mx-6 text-xl font-semibold text-neutral-600 transition-colors hover:text-black"
          : ""
      } text-${blok.allocate} flex items-center`}
      href={url}
    >
      <MediaIcon iconName={blok.symbol} />
      {blok.symbol ? <span className="px-1"></span> : null}
      {blok.display_name}
    </Link>
  );
};

export default LinkComponent;
