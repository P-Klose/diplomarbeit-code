import { storyblokEditable } from "@storyblok/react/rsc";

const GridItem = ({ blok }) => {
  return (
    <div
      {...storyblokEditable(blok)}
      className={`bg-gray-100 ${
        blok.type == "kontakt-small"
          ? "grid grid-cols-3"
          : blok.type == "kontakt-big"
          ? "grid grid-cols-1 xs:grid-cols-3"
          : ""
      }`}
    >
      <div
        className={`grid w-auto place-items-center ${
          blok.image_right ? "lg:col-start-3" : ""
        }`}
      >
        <img className="w-full p-4" src={blok.main_image.filename}></img>
      </div>
      <div
        className={`col-span-2 m-8 grid place-items-center ${
          blok.image_right ? "lg:col-start-1 lg:row-start-1" : ""
        }`}
      >
        <div>
          <h1 className="text-center text-lg font-semibold md:text-xl xl:text-2xl">
            {blok.headline}
          </h1>
          <h2 className="text-center text-base font-normal md:text-lg xl:text-xl">
            {blok.subline}
          </h2>
          <h2 className="text-center text-sm font-light md:text-base xl:text-lg">
            {blok.subheadline}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default GridItem;
