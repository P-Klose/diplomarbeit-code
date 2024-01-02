import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import Marquee from "react-fast-marquee";
import Link from "next/link";

const InfiniteMarquee = ({ blok }) => {
  return (
    <>
      <section
        className={`mx-auto max-w-screen-2xl ${
          blok.spacing_top ? "mt-5 sm:mt-8" : "mt-3 sm:mt-4"
        } ${blok.spacing_bottom ? "mb-5 sm:mb-8" : "mb-3 sm:mb-4"}
      ${blok.display_all_mobile ? "hidden sm:block" : "block"}
      `}
      >
        <Marquee
          {...storyblokEditable(blok)}
          direction={`${blok.reverse_direction ? "left" : "right"}`}
        >
          {blok.content?.map((nestedBlok: any) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </Marquee>
      </section>
      <section
        className={`${
          blok.display_all_mobile
            ? "grid grid-cols-1 place-items-center gap-12 px-8 sm:hidden"
            : "hidden"
        }
        ${blok.spacing_top ? "mt-8" : "mt-4"} ${
          blok.spacing_bottom ? "mb-8" : "mb-4"
        }`}
      >
        {blok.content?.map((nestedBlok: any) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </section>
    </>
  );
};

export default InfiniteMarquee;
