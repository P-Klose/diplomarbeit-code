import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import Link from "next/link";

const Footer = ({ blok }) => {
  return (
    <footer className="bg-gray-100 place-items-cente mt-4">
      <div className="max-w-7xl grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mx-auto py-8">
        {blok.columns.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
