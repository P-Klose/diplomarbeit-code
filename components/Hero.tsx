import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

const Hero = ({ blok }) => {
  function renderAdditionalContent() {
    if (blok.additional_content != undefined) {
      {
        blok.additional_content.map((nestedBlok: any) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ));
      }
    }
  }

  return (
    <section
      {...storyblokEditable(blok)}
      className={`relative mx-auto grid h-auto max-w-screen-2xl sm:grid-cols-7 ${
        blok.themeisdark ? "bg-zinc-900" : "bg-white"
      }`}
    >
      <div
        className={`flex h-32 sm:${blok.height} ${
          blok.fixed ? "md:sticky md:top-0" : ""
        } items-center justify-start overflow-hidden bg-cover bg-no-repeat  ${
          blok.type == "school"
            ? `${blok.type} mb-2 md:mb-24 lg:mb-12 xl:mb-8`
            : `${blok.type}`
        }`}
        style={{
          background: `linear-gradient(rgba(0,0, 0, 0.6),rgba(0, 0, 0, 0.3)),url(${blok.background_image.filename}) no-repeat bottom center / cover`,
        }}
      >
        <h1 className="w-full text-center text-5xl font-extrabold text-white sm:ml-8 sm:w-1/2 sm:text-left md:ml-16 md:text-7xl xl:text-9xl">
          {blok.headline}
        </h1>
      </div>
      {blok.additional_content?.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
      {blok.type == "school" ? (
        <img
          // src={process.env.PUBLIC_URL + "/schule_weiss.png"}
          src="./schule_weiss.png"
          alt="schule in schwarz weiß"
          className="absolute -bottom-6 md:-right-[30%] md:bottom-0 md:w-2/3 lg:-right-[15%] lg:bottom-2 lg:w-2/3 xl:-bottom-2 xl:-right-[27%] xl:w-2/3"
        />
      ) : null}
    </section>
  );
};

export default Hero;
