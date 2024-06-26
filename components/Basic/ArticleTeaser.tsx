import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArticleProps } from "../../types/interfaces";
import { transformDateFormat } from "@/util/date";

const ArticleTeaser: React.FC<{ blok: ArticleProps; full_slug: string }> = ({
  blok,
  full_slug,
}) => {
  const [isOpen, setIsOpen] = useState(false);

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
      // transition={{ layout: { duration: 0.5, type: "tween" } }}
      transition={{ layout: { duration: 0.7, type: "just" } }}
      // transition={{ layout: { duration: 1, type: "spring" } }}
      layout
      className="col-span-1 mb-2 grid min-h-max grid-cols-2 justify-items-stretch gap-2 md:pl-6 lg:col-span-3 dark:text-neutral-200"
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
          {/* { blok.subpage_enabled && (
            <motion.div layout="position" className={`col-span-1 row-start-1 `}>
              <Link
                className={`bg-${ blok.allocate} z-10 block p-2 text-xs font-medium transition-colors text-neutral-200`}
                href={`news/${ blok.slug}`}
              >
                Mehr Lesen
              </Link>
            </motion.div>
          )} */}
          {blok.date && (
            <motion.p
              layout="position"
              onClick={() => setIsOpen(!isOpen)}
              className={`bg-${blok.allocate} col-span-1 col-start-2 row-start-1 p-2 text-center text-xs font-semibold text-white hover:cursor-pointer`}
            >
              {transformDateFormat(blok.date)}
            </motion.p>
          )}
        </motion.div>
      </motion.div>
      {blok.image.filename && (
        <motion.img
          onClick={() => setIsOpen(!isOpen)}
          layout="position"
          className="col-span-2 ml-0 w-full justify-self-end hover:cursor-pointer md:col-span-1"
          src={`${blok.image.filename}/m/0x200`}
          alt={blok.image.alt}
        />
      )}
      {isOpen && (
        <motion.div
          layout="position"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          onClick={() => setIsOpen(!isOpen)}
          className={`dark:prose-dark prose col-span-2 my-2 hover:cursor-pointer prose-p:text-sm prose-p:text-zinc-900 lg:prose-p:text-base dark:prose-p:text-neutral-200`}
        >
          {render(blok.content)}
        </motion.div>
      )}
      {blok.subpage_enabled && isOpen && (
        <Link
          className={`border-l-2 bg-${blok.allocate} border-${blok.allocate} col-span-full block bg-opacity-0 p-2 text-sm font-medium transition-all hover:bg-opacity-25 hover:font-semibold lg:text-base`}
          href={`news/${blok.slug}`}
        >
          Mehr Erfahren
        </Link>
      )}
    </motion.div>
  );
};
export default ArticleTeaser;
