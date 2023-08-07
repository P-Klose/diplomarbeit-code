import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="">
      <Link href="/">
        <img style={{ height: 30 }} src="./logo-htl-schwarz.png"></img>
      </Link>
      <Link href="/ueber-uns">Über Uns</Link>
    </div>
  );
}

// export default Navbar;
