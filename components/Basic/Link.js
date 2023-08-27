import { storyblokEditable } from "@storyblok/react/rsc";
import Link from "next/link";

const LinkComponent = ({ blok }) => {
  let url = "";
  if (blok.link.linktype == "url") {
    url = blok.link.url;
  } else if (blok.link.linktype == "story") {
    url = "/" + blok.link.cached_url;
  }
  return (
    <Link {...storyblokEditable(blok)} href={url}>
      {blok.display_name}
    </Link>
  );
};

export default LinkComponent;
