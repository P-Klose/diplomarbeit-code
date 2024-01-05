import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import { FaqCollectionProps, FaqProps } from "@/types/interfaces";
import { render } from "storyblok-rich-text-react-renderer";

const FaqCollection: React.FC<{ blok: FaqCollectionProps }> = ({ blok }) => {
  return (
    <div
      className="mx-auto grid max-w-screen-2xl gap-4 p-4"
      {...storyblokEditable(blok)}
    >
      <h2 className="break-words text-2xl font-semibold uppercase xs:pl-4 md:text-3xl">
        {blok.headline}
      </h2>
      {blok.description ? (
        <div className="prose">{render(blok.description)}</div>
      ) : null}
      <div className="grid sm:px-4">
        {blok.faqs.map((nestedBlok: FaqProps) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    </div>
  );
};
export default FaqCollection;
