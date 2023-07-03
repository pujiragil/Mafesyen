import Link from "next/link";

import data from "@/utils/data.json";

import { Mafesyen, SearchIcon } from "@/components/assets";
import { NavMobile } from "@/components/molecules";

const Navbar = () => {
  const links = data.navbar.links;

  return (
    <nav className="bg-black text-white">
      <div className="container relative mx-auto h-16 px-3.5">
        {/* navigation mobile */}
        <NavMobile />

        {/* navigation tablet & laptop */}
        <div className="hidden h-full items-center md:flex">
          <div className="basis-1/4">
            <Mafesyen className="h-10 w-auto" />
          </div>

          {/* navigation links */}
          <div className="flex basis-1/2 justify-center gap-3 lg:gap-4">
            {links.map((link) => (
              <NavLinkItem key={link.id} to={link.to}>
                {link.name}
              </NavLinkItem>
            ))}

            {/* navigation search */}
            <div className="flex cursor-pointer items-center gap-1">
              <SearchIcon />
              <p className="hidden font-oswald text-sm font-semibold uppercase lg:block lg:text-base">
                search
              </p>
            </div>
          </div>

          <div className="flex basis-1/4 justify-end gap-3 lg:gap-4">
            <NavLinkItem to="/signin">sign in</NavLinkItem>
            <NavLinkItem to="/signup">create an account</NavLinkItem>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLinkItem = ({ to, children }) => {
  return (
    <Link href={to} className="w-fit">
      <p className="font-oswald text-sm font-semibold uppercase lg:text-base lg:font-medium">
        {children}
      </p>
    </Link>
  );
};

export default Navbar;
