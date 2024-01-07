import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import { LinkCollectionProps } from "../../types/interfaces";
import { motion } from "framer-motion";

const LinkCollection: React.FC<{ blok: LinkCollectionProps }> = ({ blok }) => {
  const grid_width = ["col-span-1", "col-span-2", "col-span-3", "col-span-4"];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      {...storyblokEditable(blok)}
      className="mx-auto grid max-w-screen-2xl p-4 sm:p-6"
    >
      <h2 className="break-words text-2xl font-semibold uppercase md:text-3xl">
        {blok.headline}
      </h2>
      <div className="grid grid-cols-1 gap-4 py-4 sm:grid-cols-2 sm:px-2 md:grid-cols-3 xl:grid-cols-6">
        {blok.links?.map((link) => (
          <StoryblokComponent blok={link} key={link._uid} />
        ))}
      </div>
    </motion.section>
  );
};

export default LinkCollection;
