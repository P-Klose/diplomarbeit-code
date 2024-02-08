import { Asset, LinkProps } from "@/types/interfaces";
import Link from "next/link";
import { SbBlokData, storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import LinkComponent from "../Basic/Link";

interface Box {
  _uid: string;
  image: Asset;
  assets: [Asset];
  headline: string;
  subline: string;
  content: any;
  date?: string;
  allocate?: string;
  subpage_enabled?: boolean;
  full_slug: string;
  type: string;
  _editable: SbBlokData;
}

interface SliderContentProps {
  slider?: Box[];
}

const SliderContent: React.FC<SliderContentProps> = ({ slider }) => {
  let count = 0;
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
    <>
      {slider?.map((box: Box) => {
        count++;

        if (box.type === "event") {
          return (
            <Link
              {...storyblokEditable(box._editable)}
              href={box.full_slug}
              key={box._uid}
            >
              <div
                className={`border-${box.allocate} relative flex w-full flex-shrink-0 flex-col items-start justify-start border-l-4 bg-white md:mr-8 md:min-w-[32rem] md:max-w-[32rem] md:flex-shrink`}
              >
                <img
                  className="border-box ml-2 max-w-full "
                  src={`${box.image.filename}/m/0x200`}
                ></img>
                <h2 className="col-span-3 row-start-3 m-4 text-lg font-medium">
                  {box.headline}
                </h2>
                {box.date && (
                  <p
                    className={`bg-${box.allocate} p-2 text-right text-xs font-semibold text-white`}
                  >
                    {transformDateFormat(box.date)}
                  </p>
                )}
              </div>
            </Link>
          );
        }
        if (box.type == "k-big") {
          return (
            <div
              {...storyblokEditable(box._editable)}
              className="mb-4 flex flex-col md:mb-0 md:mr-12 md:min-w-[32rem] md:max-w-[32rem]"
              key={box._uid}
            >
              <div
                className={`mb-2 h-4 w-1/4 md:mb-4 md:h-5 bg-${box.allocate}`}
              ></div>
              <h2 className="min-h[14rem] w-full text-lg uppercase">
                {box.headline}
              </h2>
              <div className="grid h-full grid-cols-3 gap-4 sm:grid-cols-4">
                <div className="col-span-2 flex h-full flex-col justify-between">
                  <div className="flex h-1/2 flex-col justify-around">
                    <h3>{box.subline}</h3>
                  </div>
                  <div className="felx flex-col justify-around">
                    {render(box.content)}
                  </div>
                </div>
                <div className="col-span-1 xs:col-span-2">
                  <img
                    className="h-full max-w-full object-contain object-right-top"
                    src={`${box.image.filename}/m/0x200`}
                  ></img>
                </div>
              </div>
            </div>
          );
        }
        if (box.type == "k-small") {
          return (
            <div
              {...storyblokEditable(box._editable)}
              className="flex flex-row md:grid md:min-w-[28rem] md:max-w-[28rem] md:grid-cols-3 md:gap-6"
              key={box._uid}
            >
              <div className="mr-6 w-1/3 md:col-span-1 md:mr-0 md:w-full">
                <img
                  className="w-full object-contain object-bottom"
                  src={`${box.image.filename}/m/0x500`}
                ></img>
              </div>
              <div className="flex flex-col items-start justify-end md:col-span-2">
                <h2 className="h-14 text-lg uppercase">{box.headline}</h2>
                <h3>{box.subline}</h3>
              </div>
            </div>
          );
        }
        if (box.type == "bewerbung") {
          return (
            <div
              {...storyblokEditable(box._editable)}
              className="grid h-full grid-cols-1 md:mr-8 md:min-w-[28rem] md:max-w-[28rem] md:gap-6"
              key={box._uid}
            >
              <div className="flex flex-col items-start justify-end md:col-span-1">
                <h1 className="text-4xl font-semibold">{box.headline}</h1>
                <h3 className="text-2xl font-medium">{box.subline}</h3>
              </div>
              <div className="prose max-w-none p-2 md:col-span-1">
                {render(box.content, {
                  blokResolvers: {
                    ["custom_link"]: (props: any) => {
                      return <LinkComponent blok={props} key={props._uid} />;
                    },
                  },
                })}
              </div>
            </div>
          );
        }
        // Fallback for unknown box types
        return (
          <div
            className="relative flex h-32 min-w-[30rem] items-center justify-center bg-neutral-800 p-10"
            key={box._uid}
          >
            <h3 className="text-white">
              Bitte setzen sie den richten Typen des Sliders
            </h3>
          </div>
        );
      })}
    </>
  );
};

export default SliderContent;
