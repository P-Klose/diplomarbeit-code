import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import TimetableSubject from "./TimetableSubject";
import { TimetableColumsProps } from "@/types/interfaces";

const TimetableColums: React.FC<{ blok: TimetableColumsProps }> = ({
  blok,
}) => {
  const firstTwo = blok.day.slice(0, 2);
  return (
    <div className="" {...storyblokEditable(blok._editable)}>
      <h2 className=" bg-neutral-100 p-3 text-lg dark:bg-neutral-800">
        {firstTwo}
      </h2>
      <div className="mt-2 grid gap-4 px-2">
        {blok.subjects?.map((nestedBlok: any) => {
          return (
            <TimetableSubject
              blok={nestedBlok}
              key={nestedBlok._uid}
            ></TimetableSubject>
          );

          // return <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />;
        })}
      </div>
    </div>
  );
};
export default TimetableColums;
