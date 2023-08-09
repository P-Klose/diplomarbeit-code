import { storyblokEditable } from "@storyblok/react/rsc";

const GridCard = ({ blok }) => {
  return (
    <div className="bg-white place-items-cente my-4 w-full">
      <h1 className="text-4xl font-extrabold">{blok.headline}</h1>
    </div>
  );
};

export default GridCard;
