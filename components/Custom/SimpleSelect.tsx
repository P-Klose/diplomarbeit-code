import { useRouter } from "next/navigation";
import React, { useState, useMemo, useEffect } from "react";

interface SimpleSelectProps {
  headings: string[];
}

const SimpleSelect: React.FC<SimpleSelectProps> = ({ headings }) => {
  const [open, setOpen] = useState<boolean>(false);

  const { replace } = useRouter();

  const setPressedValue = (value: string) => {
    replace(`#${value.toLowerCase().replaceAll(" ", "")}`);
  };

  useEffect(() => {
    function handleOutsideClick(e: any) {
      if (!e.target.closest(`#Toggle`) && !e.target.closest(`#options`))
        setOpen(false);
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const opt = useMemo(() => {
    return headings.length > 0
      ? headings.map((heading, index) => (
          <div
            key={index}
            className="z-50 cursor-pointer bg-white px-3 py-1 text-neutral-600 hover:bg-neutral-300 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
            onClick={() => {
              setPressedValue(heading);
              setOpen(false);
            }}
          >
            {heading}
          </div>
        ))
      : null;
  }, [headings]);

  return (
    <div className="relative">
      <div
        className="flex w-full items-center justify-between gap-1 divide-x divide-neutral-200 overflow-hidden bg-white text-black dark:bg-neutral-900 dark:text-neutral-200"
        onClick={() => setOpen(!open)}
      >
        <input
          className="px-2 outline-none dark:bg-neutral-900 dark:text-neutral-200"
          placeholder={"Quick Scroll"}
          type="text"
          readOnly
        />
        <span className="relative cursor-pointer p-4" id="Toggle">
          <span
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-[6px] border-b-0 border-l-transparent border-r-transparent border-t-neutral-900 transition-[transform] dark:border-t-neutral-200
              ${open ? "rotate-180" : "rotate-0"}
            `}
          ></span>
        </span>
      </div>
      <div
        id="options"
        className={`
          absolute top-10 z-50 w-full overflow-auto text-black transition-all
          ${open ? "max-h-40 " : "max-h-0 border-0"}
        `}
      >
        {opt}
      </div>
    </div>
  );
};

export default SimpleSelect;
