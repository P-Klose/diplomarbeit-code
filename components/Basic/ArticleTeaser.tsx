import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArticleProps } from "../../types/interfaces";

const ArticleTeaser: React.FC<ArticleProps> = ({ blok }) => {
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

  const borderColors = [
    "border-allgemein",
    " border-it-medientechnik",
    " border-informatik-sse",
    " border-elektronik",
    " border-medizintechnik",
    " border-informatik-sse",
    " border-informatik-ddp",
    " border-informatik-csi",
    " border-red-600",
    " border-cyan-300",
    " border-sky-400",
    " border-blue-700",
    " border-amber-500",
    " border-red-400",
    " border-pink-500",
    " border-yellow-350",
    " border-yellow-700",
    " border-red-200",
    " border-orange-950",
    " border-lime-300",
    " border-green-700",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, x: 0.9 }}
      transition={{ layout: { duration: 1, type: "spring" } }}
      layout
      className="col-span-1 mb-2 grid min-h-max grid-cols-2 justify-items-stretch gap-2 lg:col-span-3"
    >
      <motion.div
        layout="position"
        className={`border-${blok.allocate} col-span-2 flex h-full flex-col items-end justify-end border-b-4 md:col-span-1 md:border-b-0 md:border-r-4`}
      >
        <motion.h1
          layout="position"
          onClick={() => setIsOpen(!isOpen)}
          className="mr-3 text-right text-xl font-semibold hover:cursor-pointer"
        >
          {blok.headline}
        </motion.h1>
        <motion.h2
          layout="position"
          onClick={() => setIsOpen(!isOpen)}
          className="mb-3 mr-3 text-right text-lg font-medium hover:cursor-pointer"
        >
          {blok.subline}
        </motion.h2>
        <motion.div layout="position" className="grid grid-cols-2 gap-2 ">
          {/* { blok.subpage_enabled ? (
            <motion.div layout="position" className={`col-span-1 row-start-1 `}>
              <Link
                className={`bg-${ blok.allocate} z-10 block p-2 text-xs font-medium transition-colors text-neutral-200`}
                href={`news/${ blok.slug}`}
              >
                Mehr Lesen
              </Link>
            </motion.div>
          ) : null} */}
          {blok.date ? (
            <motion.p
              layout="position"
              onClick={() => setIsOpen(!isOpen)}
              className={`bg-${blok.allocate} col-span-1 col-start-2 row-start-1 p-2 text-center text-xs font-semibold text-neutral-200 hover:cursor-pointer`}
            >
              {transformDateFormat(blok.date)}
            </motion.p>
          ) : null}
        </motion.div>
      </motion.div>
      {blok.image.filename ? (
        <motion.img
          onClick={() => setIsOpen(!isOpen)}
          layout="position"
          className="col-span-2 ml-0 w-full justify-self-end hover:cursor-pointer md:col-span-1"
          src={blok.image.filename}
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
          className={`prose  lg:prose-p:text-base prose-p:text-sm prose-p:text-zinc-900 col-span-2 my-2  hover:cursor-pointer`}
        >
          {render(blok.content)}
        </motion.div>
      ) : null}
      {blok.subpage_enabled && isOpen ? (
        <Link
          className={`border-l-2 bg-${blok.allocate} border-${blok.allocate} col-span-full block bg-opacity-0 p-2 text-sm font-medium transition-all hover:bg-opacity-25 hover:font-semibold lg:text-base`}
          href={`news/${blok.slug}`}
        >
          Mehr Erfahren
        </Link>
      ) : null}
    </motion.div>
  );
};
export default ArticleTeaser;
