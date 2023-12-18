import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

const Grid = ({ blok }) => {
  return (
    <section
      {...storyblokEditable(blok)}
      className={`grid gap-4 p-4 ${blok.columns} ${blok.mediumcolumns} ${blok.largecolumns} ${blok.max_w} mx-auto`}
    >
      {blok.content?.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </section>
  );
};

export default Grid;
