"use client";
import {
  ISbStoriesParams,
  getStoryblokApi,
  storyblokEditable,
} from "@storyblok/react/rsc";

import { useRef, useState, useEffect, FC } from "react"; // Beachte die hinzugefügte useEffect-Importierung

import { GrLanguage } from "react-icons/gr";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { FaXmark, FaBars } from "react-icons/fa6";
import { PageProps } from "@/types/interfaces";
import { languages } from "@/app/i18n/settings";

const navVariants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 1, y: "-180px" },
};

const Navbar: FC<PageProps> = ({ params }) => {
  const [navbar, setNavbar] = useState<any>();
  const [smallNavIsOpen, setIsOpen] = useState(false);
  const navRef = useRef<any>();
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  const showNavbar = () => {
    setIsOpen(!smallNavIsOpen);
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 0) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    const getNavbar = async () => {
      const { data } = await fetchData(params.lng);
      setNavbar(data.story.content);
    };

    getNavbar();

    function handleOutsideClick(e: any) {
      if (!e.target.closest(`#Toggle`)) setIsOpen(false);
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  if (navbar != undefined) {
    return (
      <header
        {...storyblokEditable(navbar)}
        className="md:sticky md:top-0 md:z-[100]"
      >
        <motion.nav
          variants={{
            visible: { y: 0 },
            hidden: { y: "-100%" },
          }}
          animate={hidden ? "hidden" : "visible"}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="sticky top-0 z-[100] bg-gray-50 dark:bg-neutral-800"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mx-auto max-w-screen-2xl bg-gray-50 dark:bg-neutral-800"
          >
            <div className="flex h-14 items-center justify-between p-4">
              <div className="flex flex-row">
                <Link className=" text-nav-base" href="/">
                  <img
                    className="block w-40 dark:hidden"
                    src={`${navbar.logo.filename}/m/0x200`}
                    alt={navbar.logo.description}
                  ></img>
                  <img
                    className="hidden w-40 dark:block"
                    src={`${navbar.logo_dark.filename}/m/0x200`}
                    alt={navbar.logo_dark.description}
                  ></img>
                </Link>
                {languages
                  .filter((l) => params.lng !== l)
                  .map((l, index) => {
                    return (
                      <Link
                        key={l}
                        className="ml-6 flex items-center justify-center dark:text-neutral-200"
                        href={`/${l}`}
                      >
                        <GrLanguage></GrLanguage>
                        <p className="relative -bottom-2 -left-1 text-xs font-medium dark:text-neutral-200">
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
                      className="text-base font-medium dark:text-neutral-200"
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
                      className="text-base font-medium dark:text-neutral-200"
                      href={url}
                      key={nestedBlok._uid}
                    >
                      {nestedBlok.display_name}
                    </Link>
                  );
                })}
              </div>
              <div className="flex items-center md:hidden">
                <button id="Toggle" onClick={showNavbar} role="navigation">
                  <FaBars className="h-6 w-6 dark:text-neutral-200" />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.nav>
        <motion.nav className="block md:hidden">
          <motion.div
            initial={{ opacity: 0, y: "-180px" }}
            animate={smallNavIsOpen ? "open" : "closed"}
            variants={navVariants}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            className={`absolute top-14 z-40 w-full bg-gray-50 dark:bg-neutral-700`}
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
                  className="block px-4 py-2 text-sm hover:bg-gray-200 dark:text-neutral-100 hover:dark:bg-neutral-600"
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
                  } px-4 py-2 text-sm hover:bg-gray-200 dark:text-neutral-200 dark:hover:bg-neutral-600`}
                  href={url}
                  key={nestedBlok._uid}
                >
                  {nestedBlok.display_name}
                </Link>
              );
            })}
          </motion.div>
        </motion.nav>
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
  let sbParams: ISbStoriesParams = {
    version:
      process.env.storyblokApiVersion == "published" ? "published" : "draft",
    cv: Date.now(),
    language: lng,
  };

  const stroyblokApi = getStoryblokApi();
  return stroyblokApi.get(`cdn/stories/shared-components/navbar`, sbParams);
}

export default Navbar;
