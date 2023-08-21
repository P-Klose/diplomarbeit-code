import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

const Grid = ({ blok }) => {
  return (
    <div
      {...storyblokEditable(blok)}
      className={`grid gap-4 p-4 ${blok.columns} ${blok.mdcolumns} ${blok.max_w} mx-auto`}
    >
      {blok.content?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default Grid;
