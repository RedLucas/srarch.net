import React from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/memory", label: "In Memory" },
];

const Nav = () => {
  return (
    <header className="container p-3">
      <div className="flex items-center justify-between">
        <div className="flex-none flex items-center">
          <Link href="/">
            <Image src="/Logo.png" alt="SRA Logo" width="56" height="56" />
          </Link>
          <h1 className="p-3 max-sm:hidden">Soren Rasmussen Architects Inc.</h1>
        </div>
        <nav>
          {links.map(({ href, label }) => (
            <Link key={href} className="p-2 whitespace-nowrap" href={href}>
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Nav;
