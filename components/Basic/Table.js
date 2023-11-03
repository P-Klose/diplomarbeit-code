import { storyblokEditable } from "@storyblok/react/rsc";

const Table = ({ blok }) => {
  return (
    <section className="mx-auto max-w-screen-2xl">
      <h3 className="p-4 text-2xl font-semibold">{blok.headline}</h3>
      <table
        className="mx-4 mb-4 w-full table-fixed"
        {...storyblokEditable(blok)}
      >
        <thead className="mb-4 bg-neutral-400 ">
          <tr className="">
            {blok.table?.thead?.map((th) => {
              return (
                <th className="text-left text-xl font-semibold" key={th._uid}>
                  {th.value}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="[&>*:nth-child(even)]:bg-neutral-50 [&>*:nth-child(odd)]:bg-neutral-100">
          {blok.table?.tbody?.map((tr) => {
            return (
              <tr key={tr._uid} className="">
                {tr.body?.map((td) => {
                  return (
                    <th className="text-left text-lg font-normal" key={td._uid}>
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
