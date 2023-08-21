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
    <div className="grid md:grid-cols-6 h-[calc(100vh-3.5rem)] bg-white">
      <div
        className={
          "h-full overflow-hidden bg-cover bg-no-repeat flex justify-start items-center " +
          blok.type
        }
        style={{
          background: `linear-gradient(rgba(0,0, 0, 0.6),rgba(0, 0, 0, 0.3)),url(${blok.background_image.filename}) no-repeat bottom center / cover`,
        }}
      >
        <h1
          className="text-6xl ml-4 font-extrabold text-white"
          // {...storyblokEditable(blok)}
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
