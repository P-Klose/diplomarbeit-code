"use client";
import {
  apiPlugin,
  getStoryblokApi,
  storyblokInit,
  storyblokEditable,
  StoryblokComponent,
  ISbStoriesParams,
} from "@storyblok/react/rsc";
import { useState, useEffect, FC } from "react";
import FooterColumn from "./FooterColumn";
import { PageProps } from "@/types/interfaces";

const Footer: FC<PageProps> = ({ params }) => {
  const [footer, setFooter] = useState<any>();

  useEffect(() => {
    const getFooter = async () => {
      const { data } = await fetchData(params.lng);
      setFooter(data.story.content);
    };

    getFooter();
  }, []);
  if (footer != undefined) {
    return (
      <footer
        {...storyblokEditable(footer)}
        className="place-items-cente bg-zinc-100"
      >
        <div className="mx-auto grid max-w-screen-xl gap-4 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {footer.columns.map((nestedBlok: any) => {
            return (
              <FooterColumn
                key={nestedBlok._uid}
                blok={nestedBlok}
              ></FooterColumn>
            );
          })}
        </div>
      </footer>
    );
  }
};

export async function fetchData(lng: string) {
  let sbParams: ISbStoriesParams = {
    version:
      process.env.storyblokApiVersion == "published" ? "published" : "draft",
    language: lng,
  };
  const stroyblokApi = getStoryblokApi();
  return stroyblokApi.get(`cdn/stories/shared-components/footer`, sbParams);
}

export default Footer;
