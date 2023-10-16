import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

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
    <section
      {...storyblokEditable(blok)}
      className={`mx-auto grid h-auto max-w-screen-2xl sm:grid-cols-7 ${
        blok.themeisdark ? "bg-zinc-900" : "bg-white"
      }`}
    >
      <div
        className={`flex h-32 sm:${blok.height} ${
          blok.fixed ? "md:sticky md:top-0" : ""
        } items-center justify-start overflow-hidden bg-cover bg-no-repeat ${
          blok.type
        }`}
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
      {blok.type == "school" ? (
        <div className="relative -top-32 sm:col-span-7">
          <img
            // src={process.env.PUBLIC_URL + "/schule_weiss.png"}
            src="./schule_weiss.png"
            alt="schule in schwarz weiß"
            className="mx-auto w-full max-w-screen-xl"
          />
        </div>
      ) : null}
    </section>
  );
};

export default Hero;
