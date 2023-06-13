import Link from "next/link";
import { useState } from "react";
import { navLinks } from "../../utils/links";
import { Head } from "../Global";
import NavDropdown from "./navDropdown";
import { HamburgerIcon, SearchIcon } from "../Assets/navbar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black font-oswald text-white lg:mb-8">
      <div className="container relative mx-auto">
        <div className="px-3.5">
          <div className="flex h-14 items-center md:justify-between">
            {/* NOTE hamburger */}
            <div className="w-1/4 md:hidden">
              <HamburgerIcon onClick={() => setIsOpen(true)} />
            </div>

            <div className="flex w-2/4 justify-center md:w-auto lg:w-3/12 lg:justify-start">
              <Link href={"/"}>
                <Head />
              </Link>
            </div>

            <div className="flex w-1/4 items-center justify-end gap-x-5 md:hidden">
              <SearchIcon />
              <span className="relative">
                <img src="/cart.svg" alt="cart-icon" />
                <span className="absolute -top-1.5 -right-1.5 bg-[#EB5757] px-1 text-[10px]">
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
      <ul className="hidden items-center gap-x-4 uppercase md:flex lg:w-6/12 lg:justify-center">
        {navLinks.map((link) => (
          <li key={link.to}>
            <LinkItem to={link.to} name={link.name} />
          </li>
        ))}
      </ul>
      <div className="hidden items-center gap-x-4 uppercase md:flex lg:w-3/12 lg:justify-end">
        <LinkItem to="" name="sign in" />
        <LinkItem to="" name="create an account" />
      </div>
    </>
  );
}

function LinkItem({ to, name }) {
  return <Link href={to}>{name}</Link>;
}
