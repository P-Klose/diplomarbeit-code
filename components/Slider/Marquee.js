import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import Marquee from "react-fast-marquee";
import Link from "next/link";

const InfiniteMarquee = ({ blok }) => {
  return (
    <Marquee
      direction={`${blok.reverse_direction ? "left" : "right"}`}
      className={`mx-auto flex max-w-screen-2xl ${
        blok.spacing_top ? "mt-6" : "mt-4"
      } ${blok.spacing_bottom ? "mb-6" : "mb-4"}`}
    >
      {blok.content?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </Marquee>
  );
};

export default InfiniteMarquee;
