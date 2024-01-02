import { storyblokEditable } from "@storyblok/react/rsc";

const Headline = ({ blok }) => {
  return (
    <div
      {...storyblokEditable(blok)}
      className="col-span-full mx-auto w-full max-w-screen-2xl bg-white p-4"
    >
      <h2 className="pl-4 text-2xl font-semibold uppercase md:text-3xl">
        {blok.headline}
      </h2>
    </div>
  );
};

export default Headline;
