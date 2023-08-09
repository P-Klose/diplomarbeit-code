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
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center p-4 h-14">
            {/* Centered Navbar */}
            <div className="">
              <Link className=" text-nav-base" href="/">
                <img className="w-40" src={blok.logo.filename}></img>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link className="text-nav-base" href="/ueber-uns">
                Über Uns
              </Link>
              <Link className="text-nav-base" href="/ausbildung">
                Ausbildung
              </Link>
              <Link className="text-nav-base" href="/bewerbung">
                Bewerbung
              </Link>
              <Link className="text-nav-base" href="/kontakt">
                Kontakt
              </Link>
            </div>
            <div className="hidden md:flex items-center">
              <Link
                className="underline decoration-2 decoration-orange-400 transition duration-300"
                href="/schueler-innen"
              >
                Schüler:innen
              </Link>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={showNavbar}>
                <FaBars className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
        <div ref={navRef} className="hidden md:hidden">
          <Link
            className="block py-2 px-4 text-sm hover:bg-gray-200"
            href="/ueber-uns"
          >
            Über Uns
          </Link>
          <Link
            className="block py-2 px-4 text-sm hover:bg-gray-200"
            href="/ausbildung"
          >
            Ausbildung
          </Link>
          <Link
            className="block py-2 px-4 text-sm hover:bg-gray-200"
            href="/bewerbung"
          >
            Bewerbung
          </Link>
          <Link
            className="block py-2 px-4 text-sm hover:bg-gray-200"
            href="/kontakt"
          >
            Kontakt
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
