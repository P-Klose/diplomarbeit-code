import { TableProps } from "@/types/interfaces";
import { storyblokEditable } from "@storyblok/react/rsc";
import { motion } from "framer-motion";

const Table: React.FC<{ blok: TableProps }> = ({ blok }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="mx-auto max-w-screen-2xl p-4 sm:p-6 dark:text-neutral-200"
      id={blok.headline.toLowerCase().replaceAll(" ", "")}
    >
      {blok.headline == "" ? null : (
        <h3 className="text-xl font-semibold md:text-2xl">{blok.headline}</h3>
      )}
      <table
        className="mb-4 w-full table-fixed xs:px-4"
        key={blok._uid}
        {...storyblokEditable(blok._editable)}
      >
        <thead className="mb-4  ">
          <tr>
            {blok.table?.thead?.map((th: any, th_index: number) => {
              return (
                <th
                  className="px-2 py-2 text-left text-lg font-semibold md:text-xl"
                  key={`${th_index}`}
                >
                  {th.value}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody
          className="divide-y-2 divide-neutral-300 dark:divide-neutral-600"
          //className="[&>*:nth-child(even)]:bg-neutral-50 [&>*:nth-child(odd)]:bg-neutral-100"
        >
          {blok.table?.tbody?.map((tr: any, tr_index: number) => {
            return (
              <tr key={tr_index}>
                {tr.body?.map((td: any, te_index: number) => {
                  return (
                    <th
                      className="px-2 py-1 text-left text-lg font-normal"
                      key={`${tr_index}_${te_index}`}
                    >
                      {td.value}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </motion.section>
  );
};

export default Table;
