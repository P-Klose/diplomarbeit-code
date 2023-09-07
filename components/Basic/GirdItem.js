import { storyblokEditable } from "@storyblok/react/rsc";

const GridItem = ({ blok }) => {
  if (blok.type == "ausbildung") {
    return (
      <div
        {...storyblokEditable(blok)}
        className={`grid grid-cols-1 xs:grid-cols-2 ${blok.width} ${
          blok.image_right ? "md:col-start-1" : "md:col-start-2"
        }`}
      >
        <div
          className={`col-span-1 place-items-center border-${blok.allocate} ${
            blok.image_right ? "xs:col-start-2 xs:border-l-4" : "xs:border-r-4"
          }`}
        >
          <img className="w-full" src={blok.main_image.filename}></img>
        </div>
        <div
          className={`col-span-1 m-6 grid place-items-center ${
            blok.image_right ? "xs:col-start-1  xs:row-start-1" : ""
          }`}
        >
          <div>
            <h1
              className={`text-center ${
                blok.image_right
                  ? "xs:place-self-end xs:text-right"
                  : "xs:place-self-start xs:text-left"
              } text-lg font-semibold md:text-xl xl:text-2xl`}
            >
              {blok.headline}
            </h1>
            <h2
              className={`text-center ${
                blok.image_right
                  ? "xs:place-self-end xs:text-right"
                  : "xs:place-self-start xs:text-left"
              } text-base font-normal md:text-lg xl:text-xl`}
            >
              {blok.subline}
            </h2>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      {...storyblokEditable(blok)}
      className={`${
        blok.type == "kontakt-small"
          ? "grid grid-cols-3"
          : blok.type == "kontakt-big"
          ? "grid grid-cols-1 xs:grid-cols-3"
          : blok.type == "ausbildung"
          ? "grid grid-cols-1 xs:grid-cols-2"
          : "bg-gray-100"
      } ${blok.width}`}
    ></div>
  );
};

export default GridItem;
