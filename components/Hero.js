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
      className={`grid h-32 sm:grid-cols-7 sm:${blok.height} mx-auto max-w-screen-2xl bg-white`}
    >
      <div
        className={`flex h-full items-center justify-start overflow-hidden bg-cover bg-no-repeat ${blok.type}`}
        style={{
          background: `linear-gradient(rgba(0,0, 0, 0.6),rgba(0, 0, 0, 0.3)),url(${blok.background_image.filename}) no-repeat bottom center / cover`,
        }}
      >
        <h1
          className="w-full text-center text-5xl font-extrabold text-white sm:ml-8 sm:w-1/2 sm:text-left md:ml-16 md:text-7xl xl:text-9xl"
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
