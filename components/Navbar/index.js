import Link from "next/link";
import { useState } from "react";
import { Head } from "../Global";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen((prev) => !prev);

  return (
    <nav className="bg-black text-white lg:mb-8">
      <div className="container mx-auto relative">
        <div className="px-3.5">
          <div className="h-14 flex items-center md:justify-between">
            {/* NOTE hamburger */}
            <div className="w-1/4 md:hidden">
              <img
                onClick={handleOpen}
                className="cursor-pointer"
                src="/hamburger.svg"
                alt="hamburger"
              />
            </div>

            <div className="w-2/4 md:w-auto lg:w-3/12 flex justify-center lg:justify-start">
              <Head />
            </div>

            <div className="w-1/4 flex gap-x-5 items-center justify-end md:hidden">
              <img src="/search.svg" alt="search-icon" />
              <span className="relative">
                <img src="/cart.svg" alt="cart-icon" />
                <span className="bg-[#EB5757] px-1 absolute -top-1.5 -right-1.5 text-[10px]">2</span>
              </span>
            </div>

            {/* NOTE medium size */}
            <ul className="hidden md:flex lg:w-6/12 lg:justify-center gap-x-4 items-center uppercase">
              <li>
                <Link href={"/"}>home</Link>
              </li>
              <li>
                <Link href={"/shop"}>shop</Link>
              </li>
              <li>
                <Link href={""}>blog</Link>
              </li>
              <li>
                <Link href={""}>sale</Link>
              </li>
              <li>
                <Link href={""}>contact us</Link>
              </li>
              <li>
                <Link href={""}>search</Link>
              </li>
            </ul>

            <div className="hidden md:flex lg:w-3/12 lg:justify-end gap-x-4 items-center uppercase">
              <Link href={""}>sign in</Link>
              <Link href={""}>create an account</Link>
            </div>
          </div>
        </div>

        <div className={`${isOpen ? "translate-y-0" : "-translate-y-full"} duration-500 top-0 left-0 w-full bg-black z-10 absolute md:hidden`}>
          <div className="p-3.5 h-14 flex items-center">
            <img onClick={handleOpen} className="w-fit cursor-pointer" src="/close.svg" alt="close" />
          </div>
          <div onClick={() => setIsOpen(false)} className="px-3.5 pt-3.5 pb-8 flex flex-col gap-6">
            <div className="bg-white h-10 flex">
              <input className="outline-none h-full w-full px-6 border-none font-roboto text-xs text-black" type="input" placeholder="Type something" />
              <button className="text-[#828282] hover:text-black duration-200 px-8 bg-[#F0F1F2] border-2 border-[#C4C4C4] outline-none">FIND</button>
            </div>
            <div className="flex flex-col gap-6 uppercase font-medium text-lg">
              <div className="relative text-center cursor-pointer">
                <p>trending</p>
                <img className="absolute right-0 top-1/4 h-1/2" src="arrow-right-menu.svg" alt="arrow-right" />
              </div>
              <Link href={"/catalog"}>
                <div className="relative text-center cursor-pointer">
                  <p>catalog</p>
                  <img className="absolute right-0 top-1/4 h-1/2" src="arrow-right-menu.svg" alt="arrow-right" />
                </div>
              </Link>
              <div className="relative text-center cursor-pointer">
                <p>new</p>
                <img className="absolute right-0 top-1/4 h-1/2" src="arrow-right-menu.svg" alt="arrow-right" />
              </div>
              <div className="relative text-center cursor-pointer">
                <p>sale</p>
                <img className="absolute right-0 top-1/4 h-1/2" src="arrow-right-menu.svg" alt="arrow-right" />
              </div>
              <div className="relative text-center cursor-pointer">
                <p>brands</p>
                <img className="absolute right-0 top-1/4 h-1/2" src="arrow-right-menu.svg" alt="arrow-right" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
