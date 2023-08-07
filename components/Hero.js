import { storyblokEditable } from "@storyblok/react/rsc";

const Hero = ({ blok }) => {
  return (
    <div className="grid grid-cols-6 h-[calc(100vh-5rem)] bg-white">
      <div className="col-span-3 row-span-3 h-full bg-gray-400 hero-r-big"></div>
      <h1
        className="col-start-4 row-start-3 text-6xl text-center"
        {...storyblokEditable(blok)}
      >
        {blok.headline}
      </h1>
      <img src={blok.background_image}></img>
    </div>
  );
};

export default Hero;
