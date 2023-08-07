import { storyblokEditable } from "@storyblok/react/rsc";

const Hero = ({ blok }) => {
  return (
    <div className="flex justify-center">
      <h1 className="text-6xl" {...storyblokEditable(blok)}>
        {blok.headline}
      </h1>
      <img src={blok.background_image}></img>
    </div>
  );
};

export default Hero;
