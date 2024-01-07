import { TextProps } from "@/types/interfaces";
import { storyblokEditable } from "@storyblok/react/rsc";
import { motion } from "framer-motion";
import { render } from "storyblok-rich-text-react-renderer";

const Text: React.FC<{ blok: TextProps }> = ({ blok }) => {
  const maxWidth = ["max-w-full", "max-w-screen-xl", "max-w-screen-2xl"];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      {...storyblokEditable(blok)}
      className={`mx-auto w-full ${blok.max_w} bg-white p-4 sm:p-6`}
    >
      <h1
        className={`py-3 text-2xl font-semibold uppercase  md:text-3xl
        ${blok.divider ? "border-b-2 border-neutral-500" : ""} `}
      >
        {blok.headline}
      </h1>
      <div className="prose max-w-none pb-4 lg:prose-lg prose-p:m-2 ">
        {render(blok.content)}
      </div>
    </motion.div>
  );
};

export default Text;
