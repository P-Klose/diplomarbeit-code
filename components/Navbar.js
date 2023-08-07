// "use client";

// import { useRef } from "react";
import Link from "next/link";
import { storyblokEditable } from "@storyblok/react/rsc";
import { FaXmark, FaBars } from "react-icons/fa6";

const Navbar = ({ blok }) => {
  // const navRef = useRef();

  // const showNavbar = () => {
  //   navRef.current.classList.toggle("responsive_nav");
  // };

  return (
    <header className="">
      <nav className="bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between px-4">
            {/* Centered Navbar */}
            <div>
              <Link className="py-2 px-3 text-nav-base" href="/">
                <img className="w-40" src={blok.logo.filename}></img>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-3">
              <Link className="py-1 text-nav-base" href="/ueber-uns">
                Über Uns
              </Link>
              <Link className="py-1 text-nav-base" href="/ueber-uns">
                Über Uns
              </Link>
              <Link className="py-1 text-nav-base" href="/ueber-uns">
                Über Uns
              </Link>
              <Link className="py-1 text-nav-base" href="/ueber-uns">
                Über Uns
              </Link>
            </div>
            <div className="hidden md:flex items-center">
              <Link
                className="py-2 px-3  bg-red-700 hover:bg-red-600 rounded transition duration-300"
                href="#"
              >
                Students
              </Link>
            </div>
            {/* Right Navbar */}
            {/* <div className="flex gap-4">
              <div>
                <Link className="py-2 px-3 text-nav-base" href="/">
                  <img className="w-32" src={blok.logo.filename}></img>
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                primary nav
              </div>
            </div>
            <div className="flex items-center">
              secondary nav
            </div>
           */}
            {/* <FaXmark /> */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
