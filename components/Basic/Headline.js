import { storyblokEditable } from "@storyblok/react/rsc";

const Headline = ({ blok }) => {
  return (
    <div
      {...storyblokEditable(blok)}
      className="place-items-cente col-span-full my-4 w-full bg-white"
    >
      <h1 className="text-center text-4xl font-extrabold">{blok.headline}</h1>
    </div>
  );
};

export default Headline;
