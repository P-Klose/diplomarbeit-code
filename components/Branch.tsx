import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import Navbar from "./Navbar";
import Footer from "./Footer/Footer";

import { FaFileArrowDown } from "react-icons/fa6";
import { BranchProps } from "@/types/interfaces";

const Branch: React.FC<{ blok: BranchProps }> = ({ blok }) => {
  return (
    <>
      <section
        {...storyblokEditable(blok._editable)}
        className="mx-auto grid max-w-screen-2xl grid-cols-6 gap-10 p-6 md:gap-20"
      >
        <div className="col-span-full md:mt-16">
          <h1 className="mb-4 text-4xl font-medium uppercase md:text-6xl">
            {blok.headline}
          </h1>
          <h2 className="text-2xl font-medium uppercase md:text-3xl">
            {blok.subline}
          </h2>
        </div>
        <div className="col-span-full md:col-span-3 md:row-start-2 lg:col-span-4">
          {render(blok.description)}
          <a href={blok.folder.filename} target="_blank">
            <button className="mt-8 flex items-center justify-center bg-it-medientechnik bg-opacity-20 px-6 py-4 transition ease-in-out hover:bg-opacity-50 hover:text-neutral-800">
              <FaFileArrowDown className="mr-2"></FaFileArrowDown>
              Download Flyer {blok.headline}
            </button>
          </a>
        </div>
        <div className="col-span-full md:col-span-3 md:row-start-2 lg:col-span-2">
          <iframe
            className="aspect-video w-full"
            src={blok.imagevideo.url}
            title="YouTube video player"
          ></iframe>
        </div>
      </section>
      {blok.body.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </>
  );
};

export default Branch;
