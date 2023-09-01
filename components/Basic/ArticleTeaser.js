import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";
import { motion } from "framer-motion";
import { useState } from "react";

const ArticleTeaser = ({ article }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      transition={{ layout: { duration: 1, type: "spring" } }}
      layout
      onClick={() => setIsOpen(!isOpen)}
      className="col-span-1 min-h-max rounded bg-gray-50 md:col-span-3"
    >
      <motion.img
        layout="position"
        className="float-none ml-0 w-full md:float-right md:ml-4 md:max-w-[15rem]  "
        src={article.image.filename}
        alt="blog"
      />
      <div className="mx-4 pb-4 ">
        <motion.h1
          layout="position"
          className="mt-4 text-center text-2xl font-semibold md:text-left"
        >
          {article.headline}
        </motion.h1>
        {!isOpen && (
          <motion.p
            layout="position"
            className={`ml-1 line-clamp-4 text-zinc-700`}
          >
            {render(article.content)}
          </motion.p>
        )}
        {isOpen && (
          <motion.p
            layout="position"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className={`ml-1 text-zinc-700`}
          >
            {render(article.content)}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};
export default ArticleTeaser;
