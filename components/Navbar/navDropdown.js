import Link from "next/link";
import { navLinks } from "../../utils/links";
import NavSearchInput from "./navSearchInput";

export default function NavDropdown({ isOpen, handleOpen }) {
  return (
    <div
      className={`${isOpen ? "translate-y-0" : "-translate-y-full"
        } duration-500 top-0 left-0 w-full bg-black z-10 absolute md:hidden`}
    >
      <div className="p-3.5 h-14 flex items-center">
        <img
          onClick={() => handleOpen(false)}
          className="w-fit cursor-pointer"
          src="/close.svg"
          alt="close"
        />
      </div>
      <div
        onClick={() => handleOpen(false)}
        className="px-3.5 pt-3.5 pb-8 flex flex-col gap-6"
      >
        {/* NOTE Search Input */}
        <NavSearchInput />

        {/* NOTE Nav links */}
        <div className="flex flex-col gap-6 uppercase font-medium text-lg">
          {navLinks.map(link => (
            <NavLink to={link.to} name={link.name} />
          ))}
        </div>
      </div>
    </div>
  )
}

function NavLink({ to, name }) {
  return (
    <Link href={to}>
      <div className="relative text-center cursor-pointer">
        <p>{name}</p>
        <img
          className="absolute right-0 top-1/4 h-1/2"
          src="arrow-right-menu.svg"
          alt="arrow-right"
        />
      </div>
    </Link>
  )
}