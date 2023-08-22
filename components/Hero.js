import { storyblokEditable } from "@storyblok/react/rsc";

const Hero = ({ blok }) => {
  function renderAdditionalContent() {
    if (blok.additional_content != undefined) {
      {
        blok.additional_content.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ));
      }
    }
  }

  return (
    <div
      className={`grid sm:grid-cols-7 h-32 sm:${blok.height} bg-white max-w-screen-2xl mx-auto`}
    >
      <div
        className={`h-full overflow-hidden bg-cover bg-no-repeat flex justify-start items-center ${blok.type}`}
        style={{
          background: `linear-gradient(rgba(0,0, 0, 0.6),rgba(0, 0, 0, 0.3)),url(${blok.background_image.filename}) no-repeat bottom center / cover`,
        }}
      >
        <h1
          className="text-5xl text-center sm:text-left w-full sm:ml-8 md:text-7xl xl:text-9xl md:ml-16 sm:w-1/2 font-extrabold text-white"
          // {...storyblokEditable(blok)}
          //ml-4
        >
          {blok.headline}
        </h1>
      </div>
      {blok.additional_content?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default Hero;
