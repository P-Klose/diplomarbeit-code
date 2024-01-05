import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import { FaqProps } from "@/types/interfaces";
import { render } from "storyblok-rich-text-react-renderer";

const FaqElement: React.FC<{ blok: FaqProps }> = ({ blok }) => {
  return (
    <div className="grid grid-cols-1 gap-1" {...storyblokEditable(blok)}>
      <p className="border-b-2 border-black py-2 text-lg font-medium md:px-2 md:text-xl">
        {blok.question}
      </p>
      <div className="prose max-w-none prose-p:text-base md:px-2">
        {render(blok.answer)}
      </div>
    </div>
  );
};
export default FaqElement;
