import { SiteJumpPorps } from "@/types/interfaces";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import Link from "next/link";

const SiteJump: React.FC<{ blok: SiteJumpPorps }> = ({ blok }) => {
  return (
    <div
      {...storyblokEditable(blok._editable)}
      className="flex-rows mx-auto flex max-w-screen-2xl gap-4 p-4 md:gap-8"
    >
      {blok.headlines?.map((nestedBlok: any) => (
        <Link
          className="text-lg font-normal text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200"
          href={`#${nestedBlok.corresponding_headline.toLowerCase().replaceAll(" ", "")}`}
          key={nestedBlok._uid}
        >
          {nestedBlok.corresponding_headline}
        </Link>
      ))}
    </div>
  );
};

export default SiteJump;
