import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";

const DesignableTableValue = ({ blok }) => {
  const grid_width = ["col-span-1", "col-span-2", "col-span-3", "col-span-4"];
  console.log(blok);

  return (
    <div
      {...storyblokEditable(blok)}
      className="prose-h1:py-1 prose prose-p:m-1 prose-h1:text-lg prose-h1:font-semibold prose-h1:md:text-xl col-span-1 px-2 py-1"
    >
      {render(blok.text)}
    </div>
  );
};

export default DesignableTableValue;
