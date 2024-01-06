import { TextProps } from "@/types/interfaces";
import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";

const Text: React.FC<{ blok: TextProps }> = ({ blok }) => {
  const maxWidth = ["max-w-full", "max-w-screen-xl", "max-w-screen-2xl"];

  return (
    <div
      {...storyblokEditable(blok)}
      className={`mx-auto w-full ${blok.max_w} bg-white p-4 sm:p-6`}
    >
      <h1
        className={`py-3 text-2xl font-semibold uppercase  md:text-3xl
        ${blok.divider ? "border-b-2 border-neutral-500" : ""} `}
      >
        {blok.headline}
      </h1>
      <div className="prose max-w-none pb-4 lg:prose-lg prose-p:m-2 ">
        {render(blok.content)}
      </div>
    </div>
  );
};

export default Text;
