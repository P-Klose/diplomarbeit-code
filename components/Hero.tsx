import { HeroFeatureProps, HeroProps } from "@/types/interfaces";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import HeroFeature from "./HeroFeature";

const Hero: React.FC<{ blok: HeroProps }> = ({ blok }) => {
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
      className={`relative mx-auto grid h-auto max-w-screen-2xl grid-cols-1 sm:grid-cols-7 
      ${blok.type == "school" ? "sm:mb-10 md:mb-14 lg:mb-20 xl:mb-40" : ""}`}
    >
      <div
        className={`flex h-32 sm:${blok.height} col-span-full ${
          blok.fixed ? "md:sticky md:top-0" : "mb-4"
        } items-center justify-start overflow-hidden bg-cover bg-no-repeat ${
          blok.type
        }`}
        style={{
          background: `linear-gradient(rgba(0,0, 0, 0.6),rgba(0, 0, 0, 0.3)),url(${blok.background_image.filename}) no-repeat bottom center / cover`,
        }}
      >
        <h1 className="w-full text-center text-5xl font-extrabold uppercase text-white sm:ml-8 sm:w-1/2 sm:text-left md:ml-16 md:text-7xl xl:text-8xl">
          {blok.headline}
        </h1>
      </div>
      <div className="sm:absolute sm:bottom-0 sm:right-0 sm:block">
        <div className="mb-4 grid grid-cols-1 gap-2 px-4 sm:flex sm:flex-col sm:justify-end sm:px-0">
          {blok.hero_features?.map((feat: HeroFeatureProps) => {
            return <HeroFeature blok={feat} key={feat._uid}></HeroFeature>;
          })}
        </div>
      </div>
      {blok.additional_content?.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
      {blok.type == "school" ? (
        <img
          // src={process.env.PUBLIC_URL + "/schule_weiss.png"}
          src="./schule_weiss.png"
          alt="schule in schwarz weiß"
          className="absolute left-0 hidden w-2/3 p-4 sm:-bottom-10 sm:block md:-bottom-14 lg:-bottom-24 xl:-bottom-40"
        />
      ) : null}
    </section>
  );
};

export default Hero;
