"use client";
import { getStoryblokApi, storyblokEditable } from "@storyblok/react/rsc";

import { useRef, useState, useEffect } from "react"; // Beachte die hinzugefügte useEffect-Importierung

import Link from "next/link";
import { FaXmark, FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [navbar, setNavbar] = useState();

  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("hidden");
  };

  useEffect(() => {
    const getNavbar = async () => {
      const { data } = await fetchData();
      setNavbar(data.story.content);
    };

    getNavbar(); // Hier rufst du die Funktion einmalig beim ersten Rendern auf

    // Entferne die Endlosschleife
  }, []); // Das leere Array als zweites Argument sorgt dafür, dass useEffect nur beim ersten Rendern aufgerufen wird

  if (navbar != undefined) {
    return (
      <header {...storyblokEditable(navbar)} className="">
        <nav className="bg-gray-50">
          <div className="mx-auto max-w-screen-xl">
            <div className="flex h-14 items-center justify-between p-4">
              <div className="">
                <Link className=" text-nav-base" href="/">
                  <img className="w-40" src={navbar.logo.filename}></img>
                </Link>
              </div>
              <div className="hidden items-center space-x-4 md:flex">
                {navbar.middle_nav.map((nestedBlok) => {
                  let url = "";
                  if (nestedBlok.link.linktype == "url") {
                    url = nestedBlok.link.url;
                  } else if (nestedBlok.link.linktype == "story") {
                    url = "/" + nestedBlok.link.cached_url;
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
              <div className="hidden items-center md:flex">
                {/* <Link
                className="underline decoration-2 decoration-orange-400 transition duration-300"
                href="/schueler-innen"
              >
                Schüler:innen
              </Link> */}
                {navbar.side_nav.map((nestedBlok) => {
                  let url = "";
                  if (nestedBlok.link.linktype == "url") {
                    url = nestedBlok.link.url;
                  } else if (nestedBlok.link.linktype == "story") {
                    url = "/" + nestedBlok.link.cached_url;
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
          <div ref={navRef} className="hidden md:hidden">
            {navbar.middle_nav.map((nestedBlok) => {
              let url = "";
              if (nestedBlok.link.linktype == "url") {
                url = nestedBlok.link.url;
              } else if (nestedBlok.link.linktype == "story") {
                url = "/" + nestedBlok.link.cached_url;
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
          </div>
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

export async function fetchData() {
  let sbParams = {
    // cache: "no-store",
    version: process.env.storyblokApiVersion,
  };

  const stroyblokApi = getStoryblokApi();
  return stroyblokApi.get(`cdn/stories/shared-components/navbar`, sbParams);
}

export default Navbar;
