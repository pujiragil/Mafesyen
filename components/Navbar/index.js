import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white">
      <div className="container mx-auto">
        <div className="h-14 px-3.5 flex items-center md:justify-between">
          {/* NOTE hamburger */}
          <div className="w-1/4 md:hidden">
            <img src="/hamburger.svg" />
          </div>

          <div className="w-2/4 md:w-auto lg:w-3/12 flex justify-center lg:justify-start">
            <h1 className="uppercase p-1 border-2 border-white w-fit">Mafesyen</h1>
          </div>

          <div className="w-1/4 flex gap-x-5 items-center justify-end md:hidden">
            <img src="/search.svg" />
            <img src="/cart.svg" />
          </div>

          {/* NOTE medium size */}
          <ul className="hidden md:flex lg:w-6/12 lg:justify-center gap-x-4 items-center uppercase">
            <li><Link href={"/"}>home</Link></li>
            <li><Link href={"/shop"}>shop</Link></li>
            <li><Link href={""}>blog</Link></li>
            <li><Link href={""}>sale</Link></li>
            <li><Link href={""}>contact us</Link></li>
            <li><Link href={""}>search</Link></li>
          </ul>

          <div className="hidden md:flex lg:w-3/12 lg:justify-end gap-x-4 items-center uppercase">
            <Link href={""}>sign in</Link>
            <Link href={""}>create an account</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
