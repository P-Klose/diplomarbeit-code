"use client";

import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import { useSearchParams } from "next/navigation";
import { render } from "storyblok-rich-text-react-renderer";
import TimetableColums from "./TimetableColums";
// import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

const Timetable = ({ blok }) => {
  const searchParams = useSearchParams();
  const selectedSubjectStr = searchParams.get("subject");
  const classes = ["1.", "2.", "3.", "4.", "5."];
  const allSubjects: any[] = [];
  const colors = [
    "text-red-600",
    "text-cyan-300",
    "text-sky-400",
    "text-blue-700",
    "text-amber-500",
    "text-red-400",
    "text-pink-500",
    "text-yellow-350",
    "text-yellow-700",
    "text-red-200",
    "text-orange-950",
    "text-lime-300",
    "text-green-700",
  ];
  blok.columns.forEach((dayColumn: any) => {
    // Durchlaufe jedes Fach in diesem Wochentag und füge es zum allSubjects Array hinzu
    dayColumn.subjects.forEach((subject: any) => {
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

  // console.log(selectedSubject);

  return (
    <section
      className="mx-auto grid max-w-screen-2xl grid-cols-2 gap-6 p-6 md:grid-cols-3"
      id="timetable"
      {...storyblokEditable(blok)}
    >
      <div className="col-span-2 grid grid-cols-5 text-center">
        {blok.columns?.map((nestedBlok: any) => {
          return <TimetableColums blok={nestedBlok} key={nestedBlok._uid} />;
        })}
      </div>
      {selectedSubject ? (
        <div className="col-span-2 md:col-span-1">
          <h3
            className={`p-2 border-${selectedSubject.color} border-b-2 text-2xl`}
          >
            {selectedSubject.short_name}
          </h3>
          <h4 className="p-2 text-xl">{selectedSubject.name}</h4>
          <section className="min-h-[16rem] p-2">
            {render(selectedSubject.description)}
          </section>
          <section className="grid grid-cols-5">
            {classes.map((bz) => {
              return (
                <p className="w-full bg-neutral-100 p-4 text-center" key={bz}>
                  {bz}
                </p>
              );
            })}
            <p className="w-full p-3 text-center">
              {selectedSubject.jahrgang1} EH
            </p>
            <p className="w-full p-3  text-center">
              {selectedSubject.jahrgang2} EH
            </p>
            <p className="w-full p-3  text-center">
              {selectedSubject.jahrgang3} EH
            </p>
            <p className="w-full p-3  text-center">
              {selectedSubject.jahrgang4} EH
            </p>
            <p className="w-full p-3  text-center">
              {selectedSubject.jahrgang5} EH
            </p>
          </section>
        </div>
      ) : null}
    </section>
  );
};
export default Timetable;