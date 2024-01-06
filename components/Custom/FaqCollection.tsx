import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import { FaqCollectionProps, FaqProps } from "@/types/interfaces";
import { render } from "storyblok-rich-text-react-renderer";

const FaqCollection: React.FC<{ blok: FaqCollectionProps }> = ({ blok }) => {
  return (
    <div
      className="mx-auto grid max-w-screen-2xl gap-4 p-4 sm:p-6"
      {...storyblokEditable(blok)}
    >
      <h2 className="break-words text-2xl font-semibold uppercase md:text-3xl">
        {blok.headline}
      </h2>
      {blok.description ? (
        <div className="prose">{render(blok.description)}</div>
      ) : null}
      <div className="grid sm:px-2">
        {blok.faqs.map((nestedBlok: FaqProps) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    </div>
  );
};
export default FaqCollection;