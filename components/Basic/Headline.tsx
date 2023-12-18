import { storyblokEditable } from "@storyblok/react/rsc";

const Headline = ({ blok }) => {
  return (
    <div
      {...storyblokEditable(blok)}
      className="col-span-full mx-auto w-full max-w-screen-2xl bg-white"
    >
      <h2 className="p-4 pb-3 text-2xl font-semibold uppercase md:text-3xl">
        {blok.headline}
      </h2>
    </div>
  );
};

export default Headline;
