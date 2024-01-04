import { storyblokEditable } from "@storyblok/react/rsc";
import Link from "next/link";

const ImageComponent = ({ blok }) => {
  if (blok.type == "logo-small") {
    return (
      <img
        {...storyblokEditable(blok)}
        className="mx-10 h-full max-h-10"
        src={blok.image.filename}
      ></img>
    );
  } else if (blok.type == "h-broschuere") {
    return (
      <Link
        href={"#"}
        className="box-border pr-4 pt-4 md:col-span-1 md:-rotate-12 md:pl-4 md:pr-0 md:pt-8 lg:col-start-4 lg:row-span-2 lg:row-start-1"
        {...storyblokEditable(blok)}
      >
        <p className="pb-1">Unsere Broschüre:</p>
        <img className="w-full object-contain" src={blok.image.filename}></img>
      </Link>
    );
  } else {
    return (
      <img
        {...storyblokEditable(blok)}
        className="h-full max-h-60"
        src={blok.image.filename}
      ></img>
    );
  }
};

export default ImageComponent;
