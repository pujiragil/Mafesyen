import Link from "next/link";

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
        <div className="bg-white h-10 flex">
          <input
            className="outline-none h-full w-full px-6 border-none font-roboto text-xs text-black"
            type="input"
            placeholder="Type something"
          />
          <button className="text-[#828282] hover:text-black duration-200 px-8 bg-[#F0F1F2] border-2 border-[#C4C4C4] outline-none">
            FIND
          </button>
        </div>
        <div className="flex flex-col gap-6 uppercase font-medium text-lg">
          <NavLink to="/" name="home"/>
          <NavLink to="/catalog" name="catalog" />
          <NavLink to="/new" name="new" />
          <NavLink to="/sale" name="sale" />
          <NavLink to="/brands" name="brands" />
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