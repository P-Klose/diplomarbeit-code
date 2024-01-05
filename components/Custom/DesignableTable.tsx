import { DesignableTableProps } from "@/types/interfaces";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

const DesignableTable: React.FC<{ blok: DesignableTableProps }> = ({
  blok,
}) => {
  const grid_width = [
    "[&>div]:grid-cols-1",
    "[&>div]:grid-cols-2",
    "[&>div]:grid-cols-3",
    "[&>div]:grid-cols-4",
    "[&>div]:grid-cols-5",
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
        className={`xs:px-4 ${
          grid_width[Number.parseFloat(blok.columns) - 1]
        } divide-y-2 overflow-x-scroll [&>div]:grid`}
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
