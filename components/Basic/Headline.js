import { storyblokEditable } from "@storyblok/react/rsc";

const Headline = ({ blok }) => {
  return (
    <div className="bg-white place-items-cente my-4 w-full col-span-full">
      <h1 className="text-4xl font-extrabold text-center">{blok.headline}</h1>
    </div>
  );
};

export default Headline;
