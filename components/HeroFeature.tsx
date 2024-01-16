import { HeroFeatureProps } from "@/types/interfaces";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import MediaIcon from "./Custom/MediaIcon";
import { motion } from "framer-motion";

const HeroFeature: React.FC<{ blok: HeroFeatureProps; index: number }> = ({
  blok,
  index,
}) => {
  if (blok.type == "small") {
    return (
      <motion.div
        {...storyblokEditable(blok._editable)}
        initial={{ opacity: 0, translateX: "100" }}
        animate={{ opacity: 1, translateX: "0" }}
        transition={{ duration: 0.5, delay: 0.2 * index }}
        className="flex w-full items-center justify-center sm:items-end sm:justify-end"
      >
        <p className="flex w-full max-w-full flex-row items-center bg-neutral-200 p-3 text-left text-sm sm:max-w-max">
          <MediaIcon iconName={blok.symbol} />
          {blok.symbol ? <span className="px-1"></span> : null}
          {blok.text}
        </p>
      </motion.div>
    );
  }
  if (blok.type == "big") {
    return <div></div>;
  } else return null;
};

export default HeroFeature;
