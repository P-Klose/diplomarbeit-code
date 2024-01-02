import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import Marquee from "react-fast-marquee";
import Link from "next/link";

const InfiniteMarquee = ({ blok }) => {
  return (
    <>
      <section
        className={`mx-auto max-w-screen-2xl ${
          blok.spacing_top ? "pt-5 sm:pt-8" : "pt-2 sm:pt-3"
        } ${blok.spacing_bottom ? "pb-5 sm:pb-8" : "pb-2 sm:pb-3"}
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
        ${blok.spacing_top ? "pt-8" : "pt-4"} ${
          blok.spacing_bottom ? "pb-8" : "pb-4"
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
