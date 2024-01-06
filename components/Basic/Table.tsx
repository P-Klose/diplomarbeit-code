import { TablePorps } from "@/types/interfaces";
import { storyblokEditable } from "@storyblok/react/rsc";

const Table: React.FC<{ blok: TablePorps }> = ({ blok }) => {
  return (
    <section className="mx-auto max-w-screen-2xl p-4 xs:p-6">
      {blok.headline == "" ? null : (
        <h3 className="text-xl font-semibold md:text-2xl">{blok.headline}</h3>
      )}
      <table
        className="mb-4 w-full table-fixed xs:px-4"
        key={blok._uid}
        {...storyblokEditable(blok)}
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
          className="divide-y-2"
          //className="[&>*:nth-child(even)]:bg-neutral-50 [&>*:nth-child(odd)]:bg-neutral-100"
        >
          {blok.table?.tbody?.map((tr: any, tr_index: number) => {
            // console.log(tr);

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
    </section>
  );
};

export default Table;
