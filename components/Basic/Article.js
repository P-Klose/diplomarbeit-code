import { render } from "storyblok-rich-text-react-renderer";

const Article = ({ blok }) => {
  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto flex flex-col items-center justify-center px-5 py-24">
        <img
          className="  mb-10 w-full rounded object-cover object-center md:h-96"
          alt={blok.image.alt}
          src={blok.image.filename}
        />
        <div className="w-full text-center lg:w-2/3">
          <h1 className="title-font mb-4 text-3xl font-medium text-gray-900 sm:text-4xl">
            {blok.headline}
          </h1>
          <h1 className="title-font mb-4 text-2xl font-medium text-gray-600 sm:text-3xl">
            {blok.subline}
          </h1>
          <div className="mb-8 text-justify leading-relaxed">
            {render(blok.content)}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Article;