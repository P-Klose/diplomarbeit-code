import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

const FooterColumn = ({ blok }) => {
  return (
    <div className="col-span-1 flex flex-col gap-4 p-4">
      <h3 className="font-bold text-xl">{blok.headline}</h3>
      <hr></hr>
      {blok.links.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default FooterColumn;
