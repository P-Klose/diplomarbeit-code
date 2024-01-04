import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

const Grid = ({ blok }) => {
  const grid_width = ["col-span-1", "col-span-2", "col-span-3", "col-span-4"];

  return (
    <section
      {...storyblokEditable(blok)}
      className={`grid overflow-hidden ${
        blok.width ? "" : "mx-auto p-4"
      } gap-4 ${blok.columns} ${blok.mediumcolumns} ${blok.largecolumns} ${
        blok.max_w
      } ${blok.width}`}
    >
      {blok.content?.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </section>
  );
};

export default Grid;
