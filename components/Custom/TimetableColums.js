import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import TimetableSubject from "./TimetableSubject";

const TimetableColums = ({ blok }) => {
  const firstTwo = blok.day.slice(0, 2);
  return (
    <div className="" {...storyblokEditable(blok)}>
      <h2 className=" bg-neutral-100 p-3 text-lg">{firstTwo}</h2>
      <div className="mt-2 grid gap-4 px-2">
        {blok.subjects?.map((nestedBlok) => {
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
