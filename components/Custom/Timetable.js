"use client";

import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import { useSearchParams } from "next/navigation";
import TimetableColums from "./TimetableColums";
// import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

const Timetable = ({ blok }) => {
  const searchParams = useSearchParams();
  const selectedSubjectStr = searchParams.get("subject");
  const classes = ["1.", "2.", "3.", "4.", "5."];
  const allSubjects = [];
  blok.columns.forEach((dayColumn) => {
    // Durchlaufe jedes Fach in diesem Wochentag und füge es zum allSubjects Array hinzu
    dayColumn.subjects.forEach((subject) => {
      allSubjects.push(subject);
    });
  });
  const uniqueSubjects = allSubjects.filter(
    (subject, index, self) =>
      index === self.findIndex((s) => s.name === subject.name),
  );

  const selectedSubject = uniqueSubjects.find(
    (subject) => subject.short_name.toLowerCase() === selectedSubjectStr,
  );

  console.log(selectedSubject);

  return (
    <section
      className="mx-auto grid max-w-screen-2xl grid-cols-2 gap-6 p-6 md:grid-cols-3"
      {...storyblokEditable(blok)}
    >
      <div className="col-span-2 grid grid-cols-5 text-center">
        {blok.columns?.map((nestedBlok) => {
          return <TimetableColums blok={nestedBlok} key={nestedBlok._uid} />;
        })}
      </div>
      {selectedSubject ? (
        <div className="col-span-2 md:col-span-1">
          <h3>
            {selectedSubject.short_name} | {selectedSubject.name}
          </h3>
          <section className="grid grid-cols-5">
            {classes.map((bz) => {
              return (
                <p className="w-full bg-neutral-100 p-4 text-center">{bz}</p>
              );
            })}
            <p>2</p>
            <p>0</p>
            <p>2</p>
            <p>0</p>
            <p>0</p>
          </section>
        </div>
      ) : null}
    </section>
  );
};
export default Timetable;
