import { storyblokEditable } from "@storyblok/react/rsc";

const GridItem = ({ blok }) => {
  return (
    <div className="bg-gray-100 grid grid-cols-3">
      <div
        className={`w-auto grid place-items-center ${
          blok.image_right ? "col-start-3" : ""
        }`}
      >
        <img className="p-4" src={blok.main_image.filename}></img>
      </div>
      <div
        className={`grid place-items-center col-span-2 m-8 ${
          blok.image_right ? "col-start-1 row-start-1" : ""
        }`}
      >
        <div>
          <h1 className="text-lg md:text-xl xl:text-2xl font-semibold text-center">
            {blok.headline}
          </h1>
          <h2 className="text-base md:text-lg xl:text-xl font-normal text-center">
            {blok.subline}
          </h2>
          <h2 className="text-sm md:text-base xl:text-lg font-light text-center">
            {blok.subheadline}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default GridItem;
