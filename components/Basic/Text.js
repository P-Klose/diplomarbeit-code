import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";

const Text = ({ blok }) => {
  console.log(blok.content.content);

  return (
    <div
      {...storyblokEditable(blok)}
      className="bg-white mx-auto max-w-screen-xl w-full"
    >
      <h1
        className={`text-4xl font-semibold py-2
        ${blok.divider ? "border-b-2 border-neutral-500" : ""} `}
      >
        {blok.headline}
      </h1>
      <div className="py-4">{render(blok.content)}</div>
    </div>
  );
};

export default Text;
