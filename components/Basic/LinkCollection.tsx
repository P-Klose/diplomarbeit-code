import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import { LinkCollectionProps } from "../../types/interfaces";

const LinkCollection: React.FC<{ blok: LinkCollectionProps }> = ({ blok }) => {
  const grid_width = ["col-span-1", "col-span-2", "col-span-3", "col-span-4"];

  return (
    <section
      {...storyblokEditable(blok)}
      className="mx-auto grid max-w-screen-2xl p-4 xs:p-6"
    >
      <h2 className="break-words text-2xl font-semibold uppercase md:text-3xl">
        {blok.headline}
      </h2>
      <div className="grid grid-cols-1 gap-4 py-4 xs:px-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
        {blok.links?.map((link) => (
          <StoryblokComponent blok={link} key={link._uid} />
        ))}
      </div>
    </section>
  );
};

export default LinkCollection;
