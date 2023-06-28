import Link from "next/link";
import { useRef, useState } from "react";

import data from "@/utils/data.json";
import { cn } from "@/utils/utils";

import { Mafesyen } from "@/components/Assets/mafesyen";
import { ArrowNavigationRight } from "@/components/Assets/arrow";
import {
  CartIcon,
  CloseIcon,
  HamburgerIcon,
  SearchIcon,
} from "@/components/Assets/navbar";

const NavMobile = () => {
  const searchInputRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchInput = () => {
    setIsOpen(true);
    searchInputRef.current.focus();
  };

  return (
    <div className="h-full md:hidden">
      <div className="flex h-full items-center">
        <div className="basis-1/4">
          <HamburgerIcon
            onClick={() => setIsOpen(true)}
            className="h-5 w-5 cursor-pointer"
          />
        </div>

        <div className="flex basis-1/2 justify-center">
          <Mafesyen className="h-10 w-auto" />
        </div>

        <div className="flex basis-1/4 justify-end gap-4">
          <SearchIcon onClick={handleSearchInput} className="cursor-pointer" />
          <CartIcon />
        </div>
      </div>

      {/* navigation dropdown menu */}
      <div
        className={cn(
          isOpen ? "translate-y-0" : "-translate-y-full",
          "w-full text-white",
          "absolute top-0 left-0 z-20",
          "transition-transform duration-500 ease-in-out"
        )}
      >
        {/* navigation close button */}
        <div className="full flex h-14 items-center bg-black p-3.5">
          <CloseIcon
            onClick={() => setIsOpen(false)}
            className="h-5 w-5 cursor-pointer"
          />
        </div>

        {/* navigation search input */}
        <div className="w-full space-y-6 bg-black p-3.5 pb-7">
          <div className="flex h-10">
            <input
              ref={searchInputRef}
              placeholder="Type something..."
              className={cn(
                "px-3.5",
                "h-full w-full",
                "border-none outline-none",
                "font-roboto",
                "text-sm text-[#828282]"
              )}
            />
            <button
              className={cn(
                "h-full w-24",
                "flex-none",
                "border-2 border-[#C4C4C4]",
                "bg-[#F0F1F2]",
                "font-oswald font-medium",
                "text-sm uppercase text-[#828282]"
              )}
            >
              find
            </button>
          </div>

          {/* navigation links */}
          <NavLinks onClick={() => setIsOpen(false)} />
        </div>
      </div>
    </div>
  );
};

const NavLinks = ({ onClick }) => {
  const links = data.navbar.links;

  return (
    <div onClick={onClick} className="flex flex-col gap-6">
      {links.map((link) => (
        <NavLinkItem key={link.id} to={link.to}>
          {link.name}
        </NavLinkItem>
      ))}
    </div>
  );
};

const NavLinkItem = ({ to, children }) => {
  return (
    <Link href={to}>
      <div className="relative cursor-pointer text-center">
        <p className="font-oswald text-lg font-medium uppercase">{children}</p>
        <ArrowNavigationRight className="absolute top-1/2 right-0 h-auto w-2 -translate-y-1/2" />
      </div>
    </Link>
  );
};

export default NavMobile;
