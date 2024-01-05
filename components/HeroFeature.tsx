import { HeroFeatureProps } from "@/types/interfaces";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import MediaIcon from "./Custom/MediaIcon";

const HeroFeature: React.FC<{ blok: HeroFeatureProps }> = ({ blok }) => {
  if (blok.type == "small") {
    return (
      <div className="flex w-full items-center justify-center sm:items-end sm:justify-end">
        <p className="w-full max-w-full bg-neutral-200 p-4 text-left text-base sm:max-w-max">
          <MediaIcon iconName={blok.symbol} />
          {blok.symbol ? <span className="px-1"></span> : null}
          {blok.text}
        </p>
      </div>
    );
  }
  if (blok.type == "big") {
    return <div></div>;
  } else return null;
};

export default HeroFeature;
