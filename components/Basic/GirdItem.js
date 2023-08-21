import { storyblokEditable } from "@storyblok/react/rsc";

const GridItem = ({ blok }) => {
  return (
    <div className="place-items-cente p-4">
      <h1 className="text-4xl font-bold text-center">{blok.headline}</h1>
      <h2 className="text-2xl font-normal text-center">{blok.subline}</h2>
      <h2 className="text-xl font-light text-center">{blok.subheadline}</h2>
    </div>
  );
};

export default GridItem;
