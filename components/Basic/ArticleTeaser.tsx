import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";
import { motion } from "framer-motion";
import { useState } from "react";

const ArticleTeaser = ({ article }) => {
  const [isOpen, setIsOpen] = useState(false);

  function transformDateFormat(inputDate: string) {
    // console.log(inputDate);
    const dateParts = inputDate.split(" ");
    if (dateParts.length === 2) {
      const [datePart, timePart] = dateParts;
      const [year, month, day] = datePart.split("-");

      // Create the transformed date string
      const transformedDate = `${day}.${month}.${year}`;

      return transformedDate;
    } else {
      // Handle invalid input format
      return "Invalid Date Format";
    }
  }
  function handleOnclick() {}

  console.log(article);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, x: 0.9 }}
      transition={{ layout: { duration: 1, type: "spring" } }}
      layout
      className="col-span-1 grid min-h-max grid-cols-2 justify-items-stretch gap-2 lg:col-span-3"
    >
      <motion.div
        layout="position"
        className={`border-${article.allocate} col-span-2 flex h-full flex-col items-end justify-end border-b-4 md:col-span-1 md:border-b-0 md:border-r-4`}
      >
        <motion.h1
          layout="position"
          onClick={() => setIsOpen(!isOpen)}
          className="mr-3 text-right text-xl font-semibold hover:cursor-pointer"
        >
          {article.headline}
        </motion.h1>
        <motion.h2
          layout="position"
          onClick={() => setIsOpen(!isOpen)}
          className="mb-3 mr-3 text-right text-lg font-medium hover:cursor-pointer"
        >
          {article.subline}
        </motion.h2>
        <motion.div layout="position" className="grid grid-cols-2 gap-2 ">
          {article.subpage_enabled ? (
            <motion.div layout="position" className={`col-span-1 row-start-1 `}>
              <Link
                className={`bg-${article.allocate} z-10 block p-2 text-xs font-normal transition-colors hover:bg-white`}
                href={`news/${article.slug}`}
              >
                Mehr Lesen
              </Link>
            </motion.div>
          ) : null}
          {article.date ? (
            <motion.p
              layout="position"
              onClick={() => setIsOpen(!isOpen)}
              className={`bg-${article.allocate} col-span-1 col-start-2 row-start-1 p-2 text-center text-xs font-normal hover:cursor-pointer`}
            >
              {transformDateFormat(article.date)}
            </motion.p>
          ) : null}
        </motion.div>
      </motion.div>
      {article.image.filename ? (
        <motion.img
          onClick={() => setIsOpen(!isOpen)}
          layout="position"
          className="col-span-2 ml-0 w-full justify-self-end hover:cursor-pointer md:col-span-1"
          src={article.image.filename}
          alt=""
        />
      ) : null}
      {isOpen ? (
        <motion.div
          layout="position"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          onClick={() => setIsOpen(!isOpen)}
          className={`prose prose-p:text-sm prose-p:text-zinc-900 col-span-2 my-2 hover:cursor-pointer`}
        >
          {render(article.content)}
        </motion.div>
      ) : null}
    </motion.div>
  );
};
export default ArticleTeaser;
