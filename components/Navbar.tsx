"use client";
import { getStoryblokApi, storyblokEditable } from "@storyblok/react/rsc";

import { useRef, useState, useEffect, FC } from "react"; // Beachte die hinzugefügte useEffect-Importierung

import { GrLanguage } from "react-icons/gr";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaXmark, FaBars } from "react-icons/fa6";
import { NavPageProps, PageProps } from "@/types/interfaces";
import { languages } from "@/app/i18n/settings";

const navVariants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 1, y: "-180px" },
};

const Navbar: FC<PageProps> = ({ params }) => {
  const [navbar, setNavbar] = useState<any>();
  const [smallNavIsOpen, setIsOpen] = useState(false);
  const navRef = useRef<any>();

  const showNavbar = () => {
    setIsOpen(!smallNavIsOpen);
  };

  useEffect(() => {
    const getNavbar = async () => {
      const { data } = await fetchData(params.lng);
      setNavbar(data.story.content);
    };
    setIsOpen(false);

    getNavbar(); // Hier rufst du die Funktion einmalig beim ersten Rendern auf

    // Entferne die Endlosschleife
  }, []); // Das leere Array als zweites Argument sorgt dafür, dass useEffect nur beim ersten Rendern aufgerufen wird

  if (navbar != undefined) {
    return (
      <header {...storyblokEditable(navbar)} className="">
        <nav className="bg-gray-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative z-50 mx-auto max-w-screen-2xl bg-gray-50"
          >
            <div className="flex h-14 items-center justify-between p-4">
              <div className="flex flex-row">
                <Link className=" text-nav-base" href="/">
                  <img className="w-40" src={navbar.logo.filename}></img>
                </Link>
                {languages
                  .filter((l) => params.lng !== l)
                  .map((l, index) => {
                    return (
                      <Link
                        key={l}
                        className="ml-6 flex items-center justify-center"
                        href={`/${l}`}
                      >
                        <GrLanguage></GrLanguage>
                        <p className="relative -bottom-2 -left-1 text-xs font-medium">
                          {l.toLocaleUpperCase()}
                        </p>
                      </Link>
                    );
                  })}
              </div>
              <div className="hidden items-center space-x-4 md:flex">
                {navbar.middle_nav.map((nestedBlok: any) => {
                  let url = "";
                  if (nestedBlok.link.linktype == "url") {
                    url = nestedBlok.link.url;
                  } else if (nestedBlok.link.linktype == "story") {
                    url = nestedBlok.link.cached_url;
                    if (url.startsWith("/")) {
                    } else {
                      url = "/" + nestedBlok.link.cached_url;
                    }
                  }
                  return (
                    <Link
                      // className={nestedBlok.style}
                      className="text-base font-medium"
                      href={url}
                      key={nestedBlok._uid}
                    >
                      {nestedBlok.display_name}
                    </Link>
                  );
                })}
              </div>
              <div className="hidden items-center md:flex">
                {navbar.side_nav.map((nestedBlok: any) => {
                  let url = "";
                  if (nestedBlok.link.linktype == "url") {
                    url = nestedBlok.link.url;
                  } else if (nestedBlok.link.linktype == "story") {
                    url = nestedBlok.link.cached_url;
                    if (url.startsWith("/")) {
                    } else {
                      url = "/" + nestedBlok.link.cached_url;
                    }
                  }
                  return (
                    <Link
                      // className={nestedBlok.style}
                      className="text-base font-medium"
                      href={url}
                      key={nestedBlok._uid}
                    >
                      {nestedBlok.display_name}
                    </Link>
                  );
                })}
              </div>
              <div className="flex items-center md:hidden">
                <button onClick={showNavbar}>
                  <FaBars className="h-6 w-6" />
                </button>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: "-180px" }}
            animate={smallNavIsOpen ? "open" : "closed"}
            variants={navVariants}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            className={`absolute top-14 z-40 block w-full bg-gray-50 md:hidden ${
              smallNavIsOpen ? "" : ""
            }`}
          >
            {navbar.middle_nav.map((nestedBlok: any) => {
              let url = "";
              if (nestedBlok.link.linktype == "url") {
                url = nestedBlok.link.url;
              } else if (nestedBlok.link.linktype == "story") {
                url = nestedBlok.link.cached_url;
                if (url.startsWith("/")) {
                } else {
                  url = "/" + nestedBlok.link.cached_url;
                }
              }

              return (
                <Link
                  className="block px-4 py-2 text-sm hover:bg-gray-200"
                  href={url}
                  key={nestedBlok._uid}
                >
                  {nestedBlok.display_name}
                </Link>
              );
            })}
            {navbar.side_nav.map((nestedBlok: any, i: number) => {
              let url = "";
              if (nestedBlok.link.linktype == "url") {
                url = nestedBlok.link.url;
              } else if (nestedBlok.link.linktype == "story") {
                url = nestedBlok.link.cached_url;
                if (url.startsWith("/")) {
                } else {
                  url = "/" + nestedBlok.link.cached_url;
                }
              }

              return (
                <Link
                  className={`block ${
                    i == 0 ? "border-t-2 border-neutral-500" : ""
                  } px-4 py-2 text-sm hover:bg-gray-200`}
                  href={url}
                  key={nestedBlok._uid}
                >
                  {nestedBlok.display_name}
                </Link>
              );
            })}
          </motion.div>
        </nav>
      </header>
    );
  } else {
    return (
      <header className="">
        <nav className="bg-gray-50">
          <div className="mx-auto max-w-screen-xl">
            <div className="flex h-14 items-center justify-between p-4"></div>
          </div>
          <div ref={navRef} className="hidden md:hidden"></div>
        </nav>
      </header>
    );
  }
};

export async function fetchData(lng: string) {
  let sbParams = {
    // cache: "no-store",
    version: process.env.storyblokApiVersion,
    language: lng,
  };

  const stroyblokApi = getStoryblokApi();
  return stroyblokApi.get(`cdn/stories/shared-components/navbar`, sbParams);
}

export default Navbar;
