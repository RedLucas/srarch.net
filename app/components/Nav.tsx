import React from "react"
import Image from "next/image"
import Link from "next/link"

const Nav = () => {
  return (
    <header className="container">
      <div className="flex items-center justify-between p-3">
        <div className="flex-none flex items-center">
          <Image src="/Logo.png" alt="SRA Logo" width="56" height="56" />
          <h1 className="p-3">Soren Rasmussen Architects</h1>
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
  )
}

export default Nav
