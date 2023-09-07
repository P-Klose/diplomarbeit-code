import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";

const Text = ({ blok }) => {
  console.log(blok.content.content);

  return (
    <div
      {...storyblokEditable(blok)}
      className="mx-auto w-full max-w-screen-xl bg-white"
    >
      <h1
        className={`py-2 text-4xl font-semibold
        ${blok.divider ? "border-b-2 border-neutral-500" : ""} `}
      >
        {blok.headline}
      </h1>
      <div className="py-4">{render(blok.content)}</div>
    </div>
  );
};

export default Text;