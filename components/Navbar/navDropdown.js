import Link from "next/link";
import data from "@/utils/data.json";
import NavSearchInput from "./navSearchInput";

export default function NavDropdown({ isOpen, handleOpen }) {
  const links = data.navbar.links;

  return (
    <div
      className={`${
        isOpen ? "translate-y-0" : "-translate-y-full"
      } absolute top-0 left-0 z-10 w-full bg-black duration-500 md:hidden`}
    >
      <div className="flex h-14 items-center p-3.5">
        <img
          onClick={() => handleOpen(false)}
          className="w-fit cursor-pointer"
          src="/close.svg"
          alt="close"
        />
      </div>
      <div
        onClick={() => handleOpen(false)}
        className="flex flex-col gap-6 px-3.5 pt-3.5 pb-8"
      >
        {/* NOTE Search Input */}
        <NavSearchInput />

        {/* NOTE Nav links */}
        <div className="flex flex-col gap-6 text-lg font-medium uppercase">
          {links.map((link) => (
            <NavLink key={link.name} to={link.to} name={link.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

function NavLink({ to, name }) {
  return (
    <Link href={to}>
      <div className="relative cursor-pointer text-center">
        <p>{name}</p>
        <img
          className="absolute right-0 top-1/4 h-1/2"
          src="arrow-right-menu.svg"
          alt="arrow-right"
        />
      </div>
    </Link>
  );
}
