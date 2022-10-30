import { useState } from "react";
import { Head } from "../Global";
import Subcription from "./Subscription";

export default function MainFooter() {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto">
        <div className="px-3.5 py-7 flex flex-col items-center gap-y-7">
          <Head />
          <FooterWrap />
        </div>
      </div>
    </div>
  );
}

function FooterWrap() {
  return (
    <div className="w-full space-y-4 md:grid md:grid-cols-4">
      <FooterLink>features</FooterLink>
      <FooterLink>menu</FooterLink>
      <FooterLink>contact us</FooterLink>
      <FooterLink>follow us</FooterLink>
      <Subcription />
    </div>
  );
}

function FooterLink({ children }) {
  const [showMenu, setShowMenu] = useState(false)
  
  const showHandler = () => {
    setShowMenu(prev => !prev)
  }

  return (
    <div className="space-y-3 pb-3.5 border-b border-[#4F4F4F]">
      <div className="flex justify-between items-start">
        <p className="uppercase text-sm font-medium">{children}</p>
        <button onClick={showHandler} className="w-fit border-none outline-none">
          { showMenu ? <img className="w-[18px] h-[18px]" src="/min.svg" /> : <img src="/plus.svg" className="w-[18px] h-[18px]" />}
        </button>
      </div>
      { showMenu && <FooterMenu /> }
    </div>
  );
}

function FooterMenu() {
  return (
    <div className="uppercase text-xs text-[#828282] space-y-1.5">
      <p>men</p>
      <p>woman</p>
      <p>boys</p>
      <p>girls</p>
      <p>new arrivals</p>
      <p>shoes</p>
      <p>clothes</p>
      <p>accessories</p>
    </div>
  );
}