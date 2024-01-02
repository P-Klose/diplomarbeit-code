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
        className="mx-5 h-auto w-full max-w-[160px] self-center sm:mx-10 sm:h-full sm:max-h-10 sm:w-auto sm:max-w-none"
        src={blok.image.filename}
      ></img>
    );
  } else {
    return (
      <div className="col-span-1 box-border grid gap-4 px-4 sm:mx-12 sm:max-w-sm">
        <div className="flex items-start">
          <img
            {...storyblokEditable(blok)}
            className="h-16 w-full object-contain object-left-bottom sm:object-left-top"
            src={blok.image.filename}
          />
        </div>
        <div className="flex flex-col justify-start">
          <h3 className="text-2xl font-medium">{blok.headline}</h3>
          <h3 className="text-lg font-normal">{blok.subline}</h3>
          <Link href={url}>{shortUrl}</Link>
        </div>
      </div>
    );
  }
};

export default Sponsor;
