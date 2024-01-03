import { render } from "storyblok-rich-text-react-renderer";

interface Box {
  type: string;
  allocate: string;
  _uid: string;
  image: { filename: string };
  headline: string;
  subline: string;
  content?: any;
}

interface SliderContentProps {
  slider?: Box[];
}

const SliderContent: React.FC<SliderContentProps> = ({ slider }) => {
  let count = 0;

  return (
    <>
      {slider?.map((box: Box) => {
        count++;

        if (box.type === "event") {
          return (
            <div
              className={`border-${box.allocate} relative flex w-full flex-shrink-0 flex-col items-start justify-start border-l-4 bg-white md:mr-8 md:min-w-[32rem] md:max-w-[32rem] md:flex-shrink`}
              key={box._uid}
            >
              <img
                className="border-box ml-2 max-w-full "
                src={box.image.filename}
              ></img>
              <h2 className="col-span-3 row-start-3 m-4 text-lg font-medium">
                {box.headline}
              </h2>
              <p
                className={`bg-${box.allocate} p-2 text-right text-xs font-normal`}
              >
                {box.subline}
              </p>
            </div>
          );
        }
        if (box.type == "k-big") {
          return (
            <div
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
                    src={box.image.filename}
                  ></img>
                </div>
              </div>
            </div>
          );
        }
        if (box.type == "k-small") {
          return (
            <div
              className="flex flex-row md:grid md:min-w-[28rem] md:max-w-[28rem] md:grid-cols-3 md:gap-6"
              key={box._uid}
            >
              <div className="mr-6 w-1/3 md:col-span-1 md:mr-0 md:w-full">
                <img
                  className="w-full object-contain object-bottom"
                  src={box.image.filename}
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
          // console.log(count);
          return (
            <div
              className="row-span-1 grid bg-gray-100 md:row-span-2 md:min-w-[32rem] md:max-w-[32rem]"
              key={box._uid}
            >
              <div
                className={`row-start-1 box-border h-80 border-b-4 border-black p-6 tall:h-96 ${
                  count % 2 !== 0
                    ? "tall:row-start-1 tall:border-b-[3px]"
                    : "tall:row-start-2 tall:border-b-0 tall:border-t-[3px]"
                }`}
              >
                <h1 className="text-4xl font-semibold">{box.headline}</h1>
                <div className="">{render(box.content)}</div>
              </div>
              <div
                className={`row-start-2 box-border border-black p-6 tall:h-96 ${
                  count % 2 === 0
                    ? "tall:row-start-1 tall:border-b-[3px]"
                    : "tall:row-start-2 tall:border-t-[3px]"
                } `}
              ></div>
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
