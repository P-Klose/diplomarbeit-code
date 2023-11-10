import { storyblokEditable } from "@storyblok/react/rsc";
import Link from "next/link";

const Sponsor = ({ blok }) => {
  let url = "";
  if (blok.link.linktype == "url") {
    url = blok.link.url;
  } else if (blok.link.linktype == "story") {
    url = "/" + blok.link.cached_url;
  }
  let shortUrl = url.replace(/^https?:\/\//, "");
  if (blok.only_image == true) {
    return (
      <img
        {...storyblokEditable(blok)}
        className="mx-10 h-full max-h-10"
        src={blok.image.filename}
      ></img>
    );
  } else {
    return (
      <div className="col-span-1 mx-12 grid max-w-sm gap-4 md:col-span-2">
        <img
          {...storyblokEditable(blok)}
          className="col-span-full h-full max-w-sm"
          src={blok.image.filename}
        ></img>
        <h3 className="text-2xl font-medium">{blok.headline}</h3>
        <h3 className="text-lg font-normal">{blok.subline}</h3>
        <Link href={url}>{shortUrl}</Link>
      </div>
    );
  }
};

export default Sponsor;
