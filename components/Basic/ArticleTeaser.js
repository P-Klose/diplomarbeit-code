import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";
import { motion } from "framer-motion";
import { useState } from "react";

const ArticleTeaser = ({ article }) => {
  const [isOpen, setIsOpen] = useState(false);

  function transformDateFormat(inputDate) {
    console.log(inputDate);
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

  return (
    <motion.div
      transition={{ layout: { duration: 1, type: "spring" } }}
      layout
      onClick={() => setIsOpen(!isOpen)}
      className="col-span-1 grid min-h-max grid-cols-2 justify-items-stretch gap-2 rounded hover:cursor-pointer lg:col-span-3"
    >
      <motion.div
        layout="position"
        className={`border-${article.allocate} col-span-2 flex h-full flex-col items-end justify-end border-b-4 md:col-span-1 md:border-b-0 md:border-r-4`}
      >
        <motion.h1
          layout="position"
          className="mr-3 text-right text-xl font-semibold"
        >
          {article.headline}
        </motion.h1>
        <motion.h2
          layout="position"
          className="mb-3 mr-3 text-right text-lg font-medium"
        >
          {article.subline}
        </motion.h2>
        {article.date ? (
          <motion.p
            layout="position"
            className={`bg-${article.allocate} p-2 text-right text-xs font-normal`}
          >
            {transformDateFormat(article.date)}
          </motion.p>
        ) : null}
      </motion.div>
      <motion.img
        layout="position"
        className="col-span-2 ml-0 w-full justify-self-end md:col-span-1"
        src={article.image.filename}
        alt=""
      />
      {isOpen ? null : (
        <motion.p
          layout="position"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className={`col-span-2 my-2 text-sm text-zinc-900`}
        >
          {render(article.content)}
        </motion.p>
      )}
    </motion.div>
  );
};
export default ArticleTeaser;
