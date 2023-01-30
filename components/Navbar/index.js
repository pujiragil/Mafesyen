import Link from "next/link";
import { useState } from "react";
import { navLinks } from "../../utils/links";
import { Head } from "../Global";
import NavDropdown from "./navDropdown";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white lg:mb-8 font-oswald">
      <div className="container mx-auto relative">
        <div className="px-3.5">
          <div className="h-14 flex items-center md:justify-between">
            {/* NOTE hamburger */}
            <div className="w-1/4 md:hidden">
              <img
                onClick={() => setIsOpen(true)}
                className="cursor-pointer"
                src="/hamburger.svg"
                alt="hamburger"
              />
            </div>

            <div className="w-2/4 md:w-auto lg:w-3/12 flex justify-center lg:justify-start">
              <Link href={"/"}>
                <a>
                  <Head />
                </a>
              </Link>
            </div>

            <div className="w-1/4 flex gap-x-5 items-center justify-end md:hidden">
              <img src="/search.svg" alt="search-icon" />
              <span className="relative">
                <img src="/cart.svg" alt="cart-icon" />
                <span className="bg-[#EB5757] px-1 absolute -top-1.5 -right-1.5 text-[10px]">
                  2
                </span>
              </span>
            </div>

            {/* NOTE nav menu items ( min md size ) */}
            <NavLinks />
          </div>
        </div>

        {/* NOTE nav menu items dropdown ( mobile only ) */}
        <NavDropdown isOpen={isOpen} handleOpen={setIsOpen} />
      </div>
    </nav>
  );
}

function NavLinks() {
  return (
    <>
      <ul className="hidden md:flex lg:w-6/12 lg:justify-center gap-x-4 items-center uppercase">
        {navLinks.map(link => (
          <li key={link.to}>
            <LinkItem to={link.to} name={link.name} />
          </li>
        ))}
      </ul>
      <div className="hidden md:flex lg:w-3/12 lg:justify-end gap-x-4 items-center uppercase">
        <LinkItem to="" name="sign in"/>
        <LinkItem to="" name="create an account"/>
      </div>
    </>
  );
}

function LinkItem({ to, name }) {
  return <Link href={to}>{name}</Link>;
}
