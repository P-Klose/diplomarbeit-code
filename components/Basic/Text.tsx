import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";

const Text = ({ blok }) => {
  const maxWidth = ["max-w-full", "max-w-screen-xl", "max-w-screen-2xl"];

  return (
    <div
      {...storyblokEditable(blok)}
      className={`mx-auto w-full ${blok.max_w} bg-white p-4 xs:pl-8`}
    >
      <h1
        className={`py-3 text-2xl font-semibold uppercase  md:text-3xl
        ${blok.divider ? "border-b-2 border-neutral-500" : ""} `}
      >
        {blok.headline}
      </h1>
      <div className="prose lg:prose-lg prose-p:m-2 max-w-none pb-4 ">
        {render(blok.content)}
      </div>
    </div>
  );
};

export default Text;
