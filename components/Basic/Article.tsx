import { render } from "storyblok-rich-text-react-renderer";
import { Asset, ArticleProps } from "../../types/interfaces";
import Link from "next/link";

const borderColors = [
  "border-allgemein",
  "border-it-medientechnik",
  "border-informatik-sse",
  "border-elektronik",
  "border-medizintechnik",
  "border-informatik-sse",
  "border-informatik-ddp",
  "border-informatik-csi",
  "border-sport",
  "border-reisen",
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

const Article: React.FC<{ blok: ArticleProps }> = ({ blok }) => {
  function transformDateFormat(inputDate: string) {
    const dateParts = inputDate.split(" ");
    if (dateParts.length === 2) {
      const [datePart, timePart] = dateParts;
      const [year, month, day] = datePart.split("-");

      // Create the transformed date string
      const transformedDate = `${day}.${month}.${year}`;

      return transformedDate;
    } else {
      // Handle invalid input format
      return "Invalid Date Format";
    }
  }

  return (
    <section className="mx-auto grid max-w-screen-xl grid-cols-2 gap-4 p-4 sm:p-6 md:grid-cols-4">
      <div className="col-span-2 row-start-2 md:row-start-1 md:mb-2 lg:col-span-2">
        <img
          className="w-full object-contain object-center"
          alt={blok.image.alt}
          src={blok.image.filename}
        />
      </div>
      <div
        className={`border-${blok.allocate} col-span-2 row-start-1 flex h-full flex-col items-start justify-end border-b-4 md:border-b-0 md:border-l-4`}
      >
        <h1 className="ml-3 text-left text-2xl font-semibold hover:cursor-pointer">
          {blok.headline}
        </h1>
        <h2 className="mb-3 ml-3 text-left text-xl font-medium hover:cursor-pointer">
          {blok.subline}
        </h2>
        <div className="grid grid-cols-2 gap-2 ">
          {/* { blok.subpage_enabled ? (
            <motion.div layout="position" className={`col-span-1 row-start-1 `}>
              <Link
                className={`bg-${ blok.allocate} z-10 block p-2 text-xs font-medium transition-colors text-neutral-200`}
                href={`news/${ blok.slug}`}
              >
                Mehr Lesen
              </Link>
            </motion.div>
          ) : null} */}
          {blok.date ? (
            <p
              className={`bg-${blok.allocate} col-span-1 p-2 text-center text-xs font-semibold text-white hover:cursor-pointer`}
            >
              {transformDateFormat(blok.date)}
            </p>
          ) : null}
        </div>
      </div>
      <div
        className={`prose col-span-full p-2 prose-p:text-zinc-900 lg:p-4
        ${blok.assets ? "mb-0" : "mb-8"} max-w-none text-left`}
      >
        {render(blok.content)}
      </div>
      {blok.assets.length > 0 ? (
        <>
          <h2 className="col-span-full text-xl font-medium hover:cursor-pointer">
            Weitere Medien
          </h2>
          <div className="col-span-full grid grid-cols-2 gap-2 p-2 md:col-span-2 lg:grid-cols-3 lg:p-4">
            {blok.assets.map((asset: Asset) => {
              // console.log(asset);
              return (
                <img
                  className="z-0 transition-transform hover:z-10 hover:scale-105"
                  alt={asset.alt}
                  src={asset.filename}
                  key={asset.id}
                ></img>
              );
            })}
          </div>
        </>
      ) : null}
      <div className="col-span-full flex items-center justify-start md:justify-end">
        {blok.type == "event" ? (
          <Link
            className={`px-4 py-2 bg-${blok.allocate} w-full border-l-2 bg-opacity-0 text-base transition-all hover:bg-opacity-25 md:w-auto md:border-l-0 md:border-r-2 border-${blok.allocate}`}
            href={`/schueler-innen/events`}
          >
            Mehr Events
          </Link>
        ) : null}
        {blok.type == "news" ? (
          <Link
            className={`px-4 py-2 bg-${blok.allocate} w-full border-l-2 bg-opacity-0 text-base transition-all hover:bg-opacity-25 md:w-auto md:border-l-0 md:border-r-2 border-${blok.allocate}`}
            href={`/news`}
          >
            Mehr News
          </Link>
        ) : null}
        {blok.type == "project" ? (
          <Link
            className={`px-4 py-2 bg-${blok.allocate} w-full border-l-2 bg-opacity-0 text-base transition-all hover:bg-opacity-25 md:w-auto md:border-l-0 md:border-r-2 border-${blok.allocate}`}
            href={`/schueler-innen/projekte`}
          >
            Mehr Projekte
          </Link>
        ) : null}
      </div>
    </section>
  );
};

export default Article;
