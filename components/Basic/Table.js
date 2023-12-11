import { storyblokEditable } from "@storyblok/react/rsc";

const Table = ({ blok }) => {
  return (
    <section className="mx-auto max-w-screen-2xl p-4">
      <h3 className="p-4 text-xl font-semibold md:text-2xl">{blok.headline}</h3>
      <table
        className="mx-4 mb-4 w-full table-fixed"
        {...storyblokEditable(blok)}
      >
        <thead className="mb-4  ">
          <tr>
            {blok.table?.thead?.map((th) => {
              return (
                <th
                  className="px-2 py-2 text-left text-lg font-semibold md:text-xl"
                  key={th._uid}
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
          {blok.table?.tbody?.map((tr) => {
            return (
              <tr key={tr._uid}>
                {tr.body?.map((td) => {
                  return (
                    <th
                      className="px-2 py-1 text-left text-lg font-normal"
                      key={td._uid}
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
