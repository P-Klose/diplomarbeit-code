import { SiteJumpPorps } from "@/types/interfaces";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import Link from "next/link";
import SimpleSelect from "./SimpleSelect";

const SiteJump: React.FC<{ blok: SiteJumpPorps }> = ({ blok }) => {
  return (
    <section>
      <div
        {...storyblokEditable(blok._editable)}
        className="flex-rows mx-auto hidden max-w-screen-2xl gap-4 p-4 md:flex md:gap-8"
      >
        {blok.headlines?.map((nestedBlok: any) => (
          <Link
            className=" text-lg font-normal text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200"
            href={`#${nestedBlok.corresponding_headline.toLowerCase().replaceAll(" ", "")}`}
            key={nestedBlok._uid}
          >
            {nestedBlok.corresponding_headline}
          </Link>
        ))}
      </div>
      <div className="block p-4 md:hidden">
        <SimpleSelect
          headings={blok.headlines.map((e: any) => e.corresponding_headline)}
        ></SimpleSelect>
      </div>
    </section>
  );
};

export default SiteJump;
