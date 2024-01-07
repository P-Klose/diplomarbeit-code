"use client";

import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import { useSearchParams } from "next/navigation";
import { render } from "storyblok-rich-text-react-renderer";
import TimetableColums from "./TimetableColums";
import TimetableSubject from "./TimetableSubject";
import { TimetableProps } from "@/types/interfaces";
import { motion } from "framer-motion";

const Timetable: React.FC<{ blok: TimetableProps }> = ({ blok }) => {
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
  const specializedSubjects = uniqueSubjects.filter(
    (subject) => subject.is_specialized_subject,
  );
  const nonSpecializedSubjects = uniqueSubjects.filter(
    (subject) => !subject.is_specialized_subject,
  );

  const selectedSubject = uniqueSubjects.find(
    (subject) => subject.short_name.toLowerCase() === selectedSubjectStr,
  );

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="mx-auto grid max-w-screen-2xl grid-cols-2 gap-6 p-4 sm:p-6 md:grid-cols-3"
      id="timetable"
      {...storyblokEditable(blok)}
    >
      <h2 className="col-span-full text-2xl font-semibold uppercase md:text-3xl">
        {blok.headline}
      </h2>
      <div className="col-span-2 hidden grid-cols-5 text-center md:grid">
        {blok.columns?.map((nestedBlok: any) => {
          return <TimetableColums blok={nestedBlok} key={nestedBlok._uid} />;
        })}
      </div>
      <div className="col-span-2 grid grid-cols-2 gap-4 text-left md:hidden">
        <h3 className="col-span-full p-2 text-2xl font-medium">
          Allgemeine Fächer:
        </h3>
        {nonSpecializedSubjects.map((subject) => {
          return <TimetableSubject blok={subject} key={subject._uid} />;
        })}
        <h3 className="col-span-full p-2 text-2xl font-medium">
          Fachspezifische Fächer:
        </h3>
        {specializedSubjects.map((subject) => {
          return <TimetableSubject blok={subject} key={subject._uid} />;
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
          <section className="min-h-0 p-2 pb-4 md:min-h-[16rem]">
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
    </motion.section>
  );
};
export default Timetable;
