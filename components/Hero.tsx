import { HeroFeatureProps, HeroProps } from "@/types/interfaces";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import HeroFeature from "./HeroFeature";
import { motion } from "framer-motion";
import Image from "next/image";
import schoolblackandwhite from "../public/schule_weiss.png";

const Hero: React.FC<{ blok: HeroProps }> = ({ blok }) => {
  return (
    <motion.section
      {...storyblokEditable(blok)}
      className={`relative mx-auto grid h-auto max-w-screen-2xl grid-cols-1 sm:grid-cols-7 
      ${blok.type == "school" ? "sm:mb-10 md:mb-14 lg:mb-20 xl:mb-40" : ""}`}
    >
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        // layoutId="herosectionimg"
        className={`flex h-32 sm:${blok.height} col-span-full ${
          blok.fixed ? "md:sticky md:top-0" : "mb-4"
        } items-center justify-start overflow-hidden bg-cover bg-no-repeat ${
          blok.type
        }`}
        style={{
          background: `linear-gradient(rgba(0,0, 0, 0.6),rgba(0, 0, 0, 0.3)),url(${blok.background_image.filename}) no-repeat bottom center / cover`,
        }}
      >
        <motion.h1
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full text-center text-5xl font-extrabold uppercase text-white sm:ml-8 sm:w-1/2 sm:text-left md:ml-16 md:text-7xl xl:text-8xl"
        >
          {blok.headline}
        </motion.h1>
      </motion.div>
      {blok.hero_features ? (
        <div className="sm:absolute sm:bottom-0 sm:right-0 sm:block">
          <div className="mb-4 grid grid-cols-1 gap-2 px-4 sm:flex sm:flex-col sm:justify-end sm:px-0">
            {blok.hero_features?.map((feat: HeroFeatureProps, i) => {
              return (
                <HeroFeature
                  blok={feat}
                  index={i}
                  key={feat._uid}
                ></HeroFeature>
              );
            })}
          </div>
        </div>
      ) : null}
      {blok.additional_content?.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
      {blok.type == "school" ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute left-0 hidden w-2/3 p-4 sm:-bottom-10 sm:block md:-bottom-14 lg:-bottom-24 xl:-bottom-40"
        >
          <Image
            // src={process.env.PUBLIC_URL + "/schule_weiss.png"}
            src={schoolblackandwhite}
            alt="schule in schwarz weiß"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </motion.div>
      ) : null}
    </motion.section>
  );
};

export default Hero;
