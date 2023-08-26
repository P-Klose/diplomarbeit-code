"use client";
import { useRef } from "react";

import Link from "next/link";
import { FaXmark, FaBars } from "react-icons/fa6";

const Navbar = ({ blok }) => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("hidden");
  };

  return (
    <header className="">
      <nav className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex h-14 items-center justify-between p-4">
            <div className="">
              <Link className=" text-nav-base" href="/">
                <img className="w-40" src={blok.logo.filename}></img>
              </Link>
            </div>
            <div className="hidden items-center space-x-4 md:flex">
              {blok.middle_nav.map((nestedBlok) => {
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
              {blok.side_nav.map((nestedBlok) => {
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
          {blok.middle_nav.map((nestedBlok) => {
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
};

export default Navbar;
