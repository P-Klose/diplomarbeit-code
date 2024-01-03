import { useState, useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export default function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <>
      <div className="relative overflow-hidden">
        <div
          className="flex flex-shrink-0 transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {slides}
        </div>

        <div className="absolute bottom-0 left-0 right-0 m-2">
          <div className="flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <div
                className={`
              h-1 w-3 bg-neutral-800 transition-all
              ${curr === i ? "h-2" : "bg-opacity-50"}
            `}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-between">
        <button
          onClick={prev}
          className="m-2 p-1 text-gray-800 hover:scale-105"
        >
          <FaAngleLeft size={35} />
        </button>
        <button
          onClick={next}
          className="m-2 p-1 text-gray-800 hover:scale-105"
        >
          <FaAngleRight size={35} />
        </button>
      </div>
    </>
  );
}
