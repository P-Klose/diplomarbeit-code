"use client";
import {
  apiPlugin,
  getStoryblokApi,
  storyblokInit,
  storyblokEditable,
  StoryblokComponent,
} from "@storyblok/react/rsc";
import { useState, useEffect } from "react";
import FooterColumn from "./FooterColumn";

const Footer = () => {
  const [footer, setFooter] = useState();

  useEffect(() => {
    const getFooter = async () => {
      const { data } = await fetchData();
      setFooter(data.story.content);
    };

    getFooter();

    // console.log(footer);
  }, []);
  if (footer != undefined) {
    return (
      <footer
        {...storyblokEditable(footer)}
        className="place-items-cente bg-zinc-100"
      >
        <div className="mx-auto grid max-w-screen-xl gap-4 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {footer.columns.map((nestedBlok) => {
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

export async function fetchData() {
  let sbParams = {
    // cache: "no-store",
    version: process.env.storyblokApiVersion,
  };

  const stroyblokApi = getStoryblokApi();
  return stroyblokApi.get(`cdn/stories/shared-components/footer`, sbParams);
}

export default Footer;
