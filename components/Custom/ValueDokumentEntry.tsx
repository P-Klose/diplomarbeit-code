"use client";
import { render } from "storyblok-rich-text-react-renderer";
import { motion } from "framer-motion";
import { useState } from "react";
import { ValueDocumentEntryProps } from "@/types/interfaces";

const ValueDokumentEntry: React.FC<{
  blok: ValueDocumentEntryProps;
  count: number;
}> = ({ blok, count }) => {
  const [isOpen, setIsOpen] = useState(false);
  var padding_p = 10 + 7 * count;
  var padding_h2 = 5 + 7 * count;
  const paddings = [
    "pr-[10%]",
    "pr-[12%]",
    "pr-[17%]",
    "pr-[19%]",
    "pr-[24%]",
    "pr-[26%]",
    "pr-[31%]",
    "pr-[33%]",
    "pr-[38%]",
    "pr-[40%]",
    "pr-[45%]",
  ];
  return (
    <section>
      <motion.div
        transition={{ layout: { duration: 1, type: "spring" } }}
        layout
        onClick={() => setIsOpen(!isOpen)}
        className="block w-full cursor-pointer text-white sm:hidden sm:cursor-default"
      >
        <motion.h2
          layout="position"
          className={` mt-3  bg-allgemein p-4 text-left text-lg font-medium`}
        >
          {blok.headline}
        </motion.h2>

        {isOpen && (
          <motion.div
            layout="position"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className={`block p-6 text-sm text-zinc-900 sm:hidden dark:text-neutral-200`}
          >
            {render(blok.description)}
          </motion.div>
        )}
      </motion.div>
      <motion.div
        transition={{ layout: { duration: 1, type: "spring" } }}
        layout
        className="hidden w-full text-white sm:block"
      >
        <motion.h2
          layout="position"
          className={`ml-0 mt-3 2xl:ml-6 pr-[${padding_h2}%] bg-allgemein py-4 pl-6 text-left text-lg font-medium 2xl:pl-2`}
        >
          {blok.headline}
        </motion.h2>

        <motion.div
          layout="position"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className={`p-6 pr-[${padding_p}%] dark:prose-dark text-sm text-zinc-900 dark:text-neutral-200`}
        >
          {render(blok.description)}
        </motion.div>
      </motion.div>
    </section>
  );
};
export default ValueDokumentEntry;
