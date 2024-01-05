import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

const DesignableTable = ({ blok }) => {
  const grid_width = [
    "[&>div]:grid-cols-1",
    "[&>div]:grid-cols-2",
    "[&>div]:grid-cols-3",
    "[&>div]:grid-cols-4",
  ];

  return (
    <section
      {...storyblokEditable(blok)}
      className={`mx-auto grid max-w-screen-2xl p-4`}
    >
      {blok.headline == "" ? null : (
        <h3 className="text-xl font-semibold xs:p-4 md:text-2xl">
          {blok.headline}
        </h3>
      )}
      <div
        className={`xs:px-4 [&>div]:grid-cols-${blok.columns} divide-y-2 [&>div]:grid`}
      >
        {blok.header?.map((nestedBlok: any) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
        {blok.body?.map((nestedBlok: any) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    </section>
  );
};

export default DesignableTable;