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

  return (
    <section>
      <motion.div
        transition={{ layout: { duration: 1, type: "spring" } }}
        layout
        onClick={() => setIsOpen(!isOpen)}
        className="block w-full text-white sm:hidden"
      >
        <motion.h2
          layout="position"
          className={` mt-3  bg-allgemein p-4 text-left text-lg font-medium`}
        >
          {blok.headline}
        </motion.h2>

        {isOpen ? null : (
          <motion.div
            layout="position"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className={`block p-6 text-sm text-zinc-900 sm:hidden`}
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
          className={` mt-3 pr-[${padding_h2}%] bg-allgemein p-4 text-left text-lg font-medium`}
        >
          {blok.headline}
        </motion.h2>

        <motion.div
          layout="position"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className={`p-6 pr-[${padding_p}%]  text-sm text-zinc-900`}
        >
          {render(blok.description)}
        </motion.div>
      </motion.div>
    </section>
  );
};
export default ValueDokumentEntry;
