import { DesignableTableProps } from "@/types/interfaces";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import { motion } from "framer-motion";

const DesignableTable: React.FC<{ blok: DesignableTableProps }> = ({
  blok,
}) => {
  const grid_width = [
    "[&>div]:grid-cols-1",
    "[&>div]:grid-cols-2",
    "[&>div]:grid-cols-3",
    "[&>div]:grid-cols-4",
    "[&>div]:grid-cols-5",
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      {...storyblokEditable(blok._editable)}
      className={`mx-auto grid max-w-screen-2xl p-4 sm:p-6`}
    >
      {blok.headline == "" ? null : (
        <h3 className="text-xl font-semibold md:text-2xl">{blok.headline}</h3>
      )}
      <div
        className={` ${
          grid_width[Number.parseFloat(blok.columns) - 1]
        } divide-y-2 overflow-x-scroll [&>div]:grid`}
      >
        {blok.header?.map((nestedBlok: any) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
        {blok.body?.map((nestedBlok: any) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    </motion.section>
  );
};

export default DesignableTable;
