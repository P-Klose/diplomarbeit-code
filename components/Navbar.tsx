"use client";
import { getStoryblokApi, storyblokEditable } from "@storyblok/react/rsc";

import { useRef, useState, useEffect, FC } from "react"; // Beachte die hinzugefügte useEffect-Importierung

import { motion } from "framer-motion";
import Link from "next/link";
import { FaXmark, FaBars } from "react-icons/fa6";
import { PageProps } from "@/types/interfaces";

const navVariants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 1, y: "-180px" },
};

const Navbar: FC<PageProps> = ({ params }) => {
  const [navbar, setNavbar] = useState<any>();
  const [smallNavIsOpen, setIsOpen] = useState(false);
  const navRef = useRef<any>();
  const showNavbar = () => {
    console.log(smallNavIsOpen);
    setIsOpen(!smallNavIsOpen);
    console.log(smallNavIsOpen);
  };

  useEffect(() => {
    const getNavbar = async () => {
      const { data } = await fetchData(params.lng);
      setNavbar(data.story.content);
    };

    getNavbar(); // Hier rufst du die Funktion einmalig beim ersten Rendern auf

    // Entferne die Endlosschleife
  }, []); // Das leere Array als zweites Argument sorgt dafür, dass useEffect nur beim ersten Rendern aufgerufen wird

  if (navbar != undefined) {
    return (
      <header {...storyblokEditable(navbar)} className="">
        <nav className="bg-gray-50">
          <div className="relative z-50 mx-auto max-w-screen-2xl bg-gray-50">
            <div className="flex h-14 items-center justify-between p-4">
              <div className="">
                <Link className=" text-nav-base" href="/">
                  <img className="w-40" src={navbar.logo.filename}></img>
                </Link>
              </div>
              <div className="hidden items-center space-x-4 md:flex">
                {navbar.middle_nav.map((nestedBlok: any) => {
                  let url = "";
                  if (nestedBlok.link.linktype == "url") {
                    url = nestedBlok.link.url;
                  } else if (nestedBlok.link.linktype == "story") {
                    if (url.startsWith("/")) {
                      return;
                    } else {
                      url = "/" + nestedBlok.link.cached_url;
                    }
                  }
                  return (
                    <Link
                      // className={`${nestedBlok.style} border-b-2 border-transparent transition ease-in-out hover:border-neutral-600`}
                      className={nestedBlok.style}
                      href={url}
                      key={nestedBlok._uid}
                    >
                      {nestedBlok.display_name}
                    </Link>
                  );
                })}
              </div>
              <div className="hidden items-center md:flex">
                {/* <Link
                className="underline decoration-2 decoration-orange-400 transition duration-300"
                href="/schueler-innen"
              >
                Schüler:innen
              </Link> */}
                {navbar.side_nav.map((nestedBlok: any) => {
                  let url = "";
                  if (nestedBlok.link.linktype == "url") {
                    url = nestedBlok.link.url;
                  } else if (nestedBlok.link.linktype == "story") {
                    if (url.startsWith("/")) {
                      return;
                    } else {
                      url = "/" + nestedBlok.link.cached_url;
                    }
                  }
                  return (
                    <Link
                      className={nestedBlok.style}
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
          </div>
          <motion.div
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
                if (url.startsWith("/")) {
                  return;
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
