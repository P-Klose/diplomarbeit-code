import { ImageComponentProps } from "@/types/interfaces";
import { storyblokEditable } from "@storyblok/react/rsc";
import Link from "next/link";
import { motion } from "framer-motion";

const ImageComponent: React.FC<{ blok: ImageComponentProps }> = ({ blok }) => {
  if (blok.type == "logo-small") {
    return (
      <img
        {...storyblokEditable(blok._editable)}
        className="mx-10 h-full max-h-10"
        src={`${blok.image.filename}/m/0x200`}
      ></img>
    );
  } else if (blok.type == "h-broschuere") {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="box-border pr-4 pt-4 md:col-span-1 md:-rotate-12 md:pl-4 md:pr-0 md:pt-8 lg:col-start-4 lg:row-span-2 lg:row-start-1"
      >
        <Link
          href={"#"}
          className="z-50 w-full"
          {...storyblokEditable(blok._editable)}
        >
          <p className="pb-1 dark:text-neutral-200">Unsere Broschüre:</p>
          <img
            className="w-full object-contain"
            src={`${blok.image.filename}/m/0x200`}
            alt={blok.image.alt}
          ></img>
        </Link>
      </motion.div>
    );
  } else {
    return (
      <img
        {...storyblokEditable(blok._editable)}
        className="h-full max-h-60"
        src={`${blok.image.filename}/m/0x200`}
        alt={blok.image.alt}
      ></img>
    );
  }
};

export default ImageComponent;
