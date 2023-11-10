import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import Marquee from "react-fast-marquee";
import Link from "next/link";

const InfiniteMarquee = ({ blok }) => {
  return (
    <Marquee
      {...storyblokEditable(blok)}
      direction={`${blok.reverse_direction ? "left" : "right"}`}
      className={`mx-auto flex max-w-screen-2xl ${
        blok.spacing_top ? "mt-8" : "mt-4"
      } ${blok.spacing_bottom ? "mb-8" : "mb-4"}`}
    >
      {blok.content?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </Marquee>
  );
};

export default InfiniteMarquee;
