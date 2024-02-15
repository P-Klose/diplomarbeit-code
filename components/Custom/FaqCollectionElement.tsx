import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import { FaqProps } from "@/types/interfaces";
import { render } from "storyblok-rich-text-react-renderer";
import { LayoutGroup } from "framer-motion";
import { motion } from "framer-motion";
import { useState } from "react";

const FaqElement: React.FC<{ blok: FaqProps }> = ({ blok }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      layout="position"
      className="grid cursor-pointer grid-cols-1 border-b-2 border-neutral-400 dark:border-neutral-600"
      {...storyblokEditable(blok._editable)}
      onClick={() => setIsOpen(!isOpen)}
    >
      <motion.p
        layout="position"
        className={` ${
          isOpen
            ? "bg-neutral-100 text-black dark:bg-neutral-800 dark:text-neutral-200"
            : "bg-white text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200"
        } py-2 text-lg font-medium transition-colors hover:bg-neutral-100 md:px-2 md:text-xl  dark:hover:bg-neutral-800`}
      >
        {blok.question}
      </motion.p>
      <LayoutGroup>
        {isOpen && (
          <motion.div
            layout="position"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            onClick={() => setIsOpen(!isOpen)}
            className="dark:prose-dark prose max-w-none bg-neutral-100 py-2 prose-p:text-base prose-p:text-neutral-900 md:px-2 dark:bg-neutral-800 dark:prose-p:text-neutral-200"
          >
            {render(blok.answer)}
          </motion.div>
        )}
      </LayoutGroup>
    </motion.div>
  );
};
export default FaqElement;
