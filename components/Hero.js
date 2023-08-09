import { storyblokEditable } from "@storyblok/react/rsc";

const Hero = ({ blok }) => {
  return (
    <div className="grid md:grid-cols-6 h-[calc(100vh-5rem)] bg-white">
      <div
        className={
          "h-full overflow-hidden bg-cover bg-no-repeat flex justify-start items-center " +
          blok.type
        }
        style={{
          backgroundImage: `url(${blok.background_image.filename})`,
        }}
      >
        <h1
          className="text-6xl ml-4 font-extrabold text-white"
          // {...storyblokEditable(blok)}
        >
          {blok.headline}
        </h1>
      </div>
    </div>
  );
};

export default Hero;
