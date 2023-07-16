import React from "react";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <header className="container p-3">
      <div className="flex items-center justify-between">
        <div className="flex-none flex items-center">
          <Link href="/">
            <Image src="/Logo.png" alt="SRA Logo" width="56" height="56" />
          </Link>
          {/* <h1 className="p-3">Soren Rasmussen Architects</h1> */}
        </div>
        {/* <div className="">
          <Link className="p-2" href="">
            About
          </Link>
          <Link className="p-2" href="">
            About
          </Link>
          <Link className="p-2" href="">
            About
          </Link>
          <Link className="p-2" href="">
            About
          </Link>
        </div> */}
      </div>
    </header>
  );
};

export default Nav;
