import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";

const ArticleTeaser = ({ article }) => {
  return (
    <div className="col-span-1 min-h-max rounded bg-gray-50 md:col-span-2">
      <img
        className="float-none ml-0 w-full md:float-right md:ml-4 md:max-w-xs"
        src={article.image.filename}
        alt="blog"
      />
      <div className="mx-4">
        <h1 className="mt-4 text-left text-2xl font-semibold">Test</h1>
        <p className="ml-1 line-clamp-4 text-zinc-700">
          {render(article.content)}
        </p>
      </div>
    </div>
  );
};
export default ArticleTeaser;
