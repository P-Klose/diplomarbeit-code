import { SponsorProps } from "@/types/interfaces";
import { storyblokEditable } from "@storyblok/react/rsc";
import { motion } from "framer-motion";
import Link from "next/link";

const Sponsor: React.FC<{ blok: SponsorProps }> = ({ blok }) => {
  let url = "";
  if (blok.link.linktype == "url") {
    url = blok.link.url;
  } else if (blok.link.linktype == "story") {
    if (url.startsWith("/")) {
    } else {
      url = "/" + blok.link.cached_url;
    }
  }
  let shortUrl = url.replace(/^https?:\/\//, "");
  if (blok.only_image == true) {
    return (
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        {...storyblokEditable(blok._editable)}
        className="mx-5 h-auto w-full max-w-[160px] self-center sm:mx-10 sm:h-full sm:max-h-10 sm:w-auto sm:max-w-none"
        src={`${blok.image.filename}`}
        alt={blok.image.alt}
      ></motion.img>
    );
  } else {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        {...storyblokEditable(blok._editable)}
        className="col-span-1 box-border grid gap-4 px-4 sm:mx-12 sm:max-w-sm dark:text-neutral-200"
      >
        <div className="flex items-start">
          <img
            className="h-16 w-full object-contain object-left-bottom sm:object-left-top"
            src={`${blok.image.filename}/m/0x200`}
            alt={blok.image.alt}
          />
        </div>
        <div className="flex flex-col justify-start sm:min-h-40">
          <h3 className="text-2xl font-medium">{blok.headline}</h3>
          <h3 className="text-lg font-normal">{blok.subline}</h3>
          <Link className="pt-2" href={url}>
            {shortUrl}
          </Link>
        </div>
      </motion.div>
    );
  }
};

export default Sponsor;
