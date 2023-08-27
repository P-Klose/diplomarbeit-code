import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import Link from "next/link";

const Footer = ({ blok }) => {
  return (
    <footer
      {...storyblokEditable(blok)}
      className="place-items-cente bg-zinc-100"
    >
      <div className="mx-auto grid max-w-screen-xl gap-4 py-8 sm:grid-cols-2 lg:grid-cols-4">
        {blok.columns.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
