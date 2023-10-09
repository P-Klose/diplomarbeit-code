import { storyblokEditable } from "@storyblok/react/rsc";
// import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import Link from "next/link";

const TimetableSubject = ({ blok }) => {
  const subject = blok.short_name.toLowerCase();

  return (
    <Link
      className="flex flex-col items-center justify-center border-x-4 border-red-600 border-opacity-25 py-2 text-center hover:border-opacity-100"
      href={`?subject=${subject}`}
      scroll={false}
    >
      <h3>{blok.name}</h3>
      <h4>{blok.short_name}</h4>
    </Link>
  );
};
export default TimetableSubject;
