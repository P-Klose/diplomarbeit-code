import { storyblokEditable } from "@storyblok/react/rsc";
// import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import Link from "next/link";

const TimetableSubject = ({ blok }) => {
  const subject = blok.short_name.toLowerCase();
  const bgColors = [
    "border-red-600",
    "border-cyan-300",
    "border-sky-400",
    "border-blue-700",
    "border-amber-500",
    "border-red-400",
    "border-pink-500",
    "border-yellow-350",
    "border-yellow-700",
    "border-red-200",
    "border-orange-950",
    "border-lime-300",
    "border-green-700",
  ];
  return (
    <Link
      className={`flex flex-col items-center justify-center border-x-4 border-${blok.color} border-opacity-50 py-2 text-center transition ease-in-out hover:border-opacity-100`}
      href={`?subject=${subject}&#timetable`}
      scroll={true}
    >
      <h3>{blok.name}</h3>
      <h4>{blok.short_name}</h4>
    </Link>
  );
};
export default TimetableSubject;
