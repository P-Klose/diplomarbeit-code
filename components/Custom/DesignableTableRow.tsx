import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

const DesignableTableRow = ({ blok }) => {
  const grid_width = ["col-span-1", "col-span-2", "col-span-3", "col-span-4"];

  return (
    <div {...storyblokEditable(blok)} className="col-span-full">
      {blok.values?.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default DesignableTableRow;