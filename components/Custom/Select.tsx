"use client";
import { SelectProps } from "@/types/interfaces";
import { useRouter } from "next/navigation";
import { useState, useMemo, useEffect } from "react";

export const Select: React.FC<SelectProps> = ({
  options,
  selected,
  elementId,
}) => {
  const [search, setSearch] = useState("");
  const { replace } = useRouter();

  const handleSearch = (value: string) => {
    console.log(value);

    replace(`?class=${value.toLowerCase()}#${elementId}`);
  };
  const [open, setOpen] = useState(false);
  const [id] = useState(-1);

  useEffect(() => {
    function handleOutsideClick(e: any) {
      if (
        !e.target.closest(`#Toggle-${id}`) &&
        !e.target.closest(`#Select-${id}`)
      )
        setOpen(false);
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const opt = useMemo(() => {
    //Manage search and options

    return options.length > 0
      ? options.map((o: any, i: any) => (
          <div
            key={i}
            className="cursor-pointer bg-white px-3 py-1 text-neutral-600 hover:bg-neutral-300 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
            onClick={() => {
              handleSearch(o.toString());
              setOpen(false);
            }}
          >
            {o}
          </div>
        ))
      : [
          <div
            key={"not-found"}
            className="cursor-pointer bg-white px-3 py-1 text-neutral-600 hover:bg-neutral-300 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
            onClick={() => {
              setOpen(false);
            }}
          >
            No Matches Found
          </div>,
        ];
  }, [options]);

  return (
    <div
      id={`Select-${id}`}
      className="relative flex flex-col items-center justify-center"
    >
      <div className="flex w-full items-center justify-between gap-1 divide-x divide-neutral-200 overflow-hidden bg-white text-black dark:bg-neutral-900 dark:text-neutral-200">
        <input
          className="px-2 outline-none dark:bg-neutral-900 dark:text-neutral-200"
          placeholder={selected}
          type="text"
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => setOpen(true)}
        />
        <span
          className="relative cursor-pointer p-4"
          onClick={() => setOpen((p) => !p)}
          id={`Toggle-${id}`}
        >
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
          absolute top-10 w-full overflow-auto text-black transition-all
          ${open ? "max-h-40 " : "max-h-0 border-0"}
        `}
      >
        {opt}
      </div>
    </div>
  );
};

// Select.propTypes = {
//   options: PropTypes.array.isRequired,
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

// Select.defaultProps = {
//   options: [],
//   value: "",
//   onChange: () => {},
// };
