import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

const FooterColumn = ({ blok }) => {
  return (
    <div
      {...storyblokEditable(blok)}
      className="col-span-1 flex flex-col gap-4 p-4 text-sm text-zinc-700"
    >
      <h3 className="text-lg font-semibold text-black">{blok.headline}</h3>
      <hr></hr>
      {blok.links.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default FooterColumn;
