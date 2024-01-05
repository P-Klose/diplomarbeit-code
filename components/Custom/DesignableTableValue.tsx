import { DesignableTableValueProps } from "@/types/interfaces";
import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";

const DesignableTableValue: React.FC<{ blok: DesignableTableValueProps }> = ({
  blok,
}) => {
  const grid_width = ["col-span-1", "col-span-2", "col-span-3", "col-span-4"];
  return (
    <div
      {...storyblokEditable(blok)}
      className="prose col-span-1 px-2 py-1 prose-h1:py-1 prose-h1:text-lg prose-h1:font-semibold prose-p:m-1 prose-h1:md:text-xl"
    >
      {render(blok.text)}
    </div>
  );
};

export default DesignableTableValue;
