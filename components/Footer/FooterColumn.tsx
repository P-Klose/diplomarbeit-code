import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import LinkComponent from "../Basic/Link";
import { FooterColumnProps } from "@/types/interfaces";

const FooterColumn: React.FC<{ blok: FooterColumnProps }> = ({ blok }) => {
  return (
    <div
      {...storyblokEditable(blok._editable)}
      className="col-span-1 flex flex-col gap-4 p-4 text-sm text-zinc-700 dark:text-neutral-300"
    >
      <h3 className="text-lg font-semibold text-black dark:text-neutral-100">
        {blok.headline}
      </h3>
      <hr></hr>
      {blok.links.map((nestedBlok: any) => {
        return (
          <LinkComponent
            key={nestedBlok._uid}
            blok={nestedBlok}
          ></LinkComponent>
        );
      })}
    </div>
  );
};

export default FooterColumn;
