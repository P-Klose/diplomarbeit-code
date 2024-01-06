import React from "react";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import { IFrameProps } from "@/types/interfaces";

const IFrameContainer: React.FC<{ blok: IFrameProps }> = ({ blok }) => {
  return (
    <div
      {...storyblokEditable(blok)}
      className={`mx-auto grid max-w-screen-2xl grid-cols-1 gap-4 p-4 sm:p-6`}
    >
      <h2 className="break-words text-2xl font-semibold uppercase md:text-3xl">
        {blok.headline}
      </h2>
      <div className="col-span-1 box-border aspect-video border-2">
        <iframe
          className="h-full w-full"
          src={blok.iframe_content.url}
        ></iframe>
      </div>
      <div className="felx flex-row md:justify-end">
        {blok.links.map((nestedBlok: any) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    </div>
  );
};

export default IFrameContainer;
