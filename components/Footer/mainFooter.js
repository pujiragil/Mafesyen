import { useState } from "react";
import { features, menu } from "@/utils/footer-links";
import { Head } from "../Global";
import Subcription from "./Subscription";

export default function MainFooter() {
  return (
    <div className="bg-black text-white">
      <div className="font- container mx-auto">
        <div className="flex flex-col items-center px-3.5 py-7">
          <FooterWrap />
        </div>
      </div>
    </div>
  );
}

function FooterWrap() {
  return (
    <div className="h-full w-full flex-wrap gap-y-7 space-y-4 md:flex md:space-y-0">
      <div className="mb-7 flex w-full justify-center md:m-0 lg:w-2/12 lg:justify-start">
        <Head />
      </div>
      <FooterLink links={features}>features</FooterLink>
      <FooterLink links={menu}>menu</FooterLink>
      <FooterLink type={"contact"}>contact us</FooterLink>
      <FooterLink type={"social media"}>follow us</FooterLink>
      <Subcription />
    </div>
  );
}

function FooterLink({ children, links, type }) {
  const [showMenu, setShowMenu] = useState(false);

  const showHandler = () => {
    setShowMenu((prev) => !prev);
  };

  if (type === "contact") {
    return (
      <div className="w-full justify-center border-b border-[#4F4F4F] uppercase md:flex md:w-1/4 md:border-none lg:w-2/12 lg:justify-start">
        <div className="space-y-3 pb-3.5 md:w-fit md:p-0">
          <div className="flex items-start justify-between">
            <p className="font-oswald text-sm font-medium">{children}</p>
            <button
              onClick={showHandler}
              className="w-fit border-none outline-none md:hidden"
            >
              {showMenu ? (
                <img src="/min.svg" className="h-[18px] w-[18px]" />
              ) : (
                <img src="/plus.svg" className="h-[18px] w-[18px]" />
              )}
            </button>
          </div>
          {showMenu && (
            <div className="space-y-2 text-xs">
              <div className="space-y-1">
                <p className="font-medium">address:</p>
                <p className="font-roboto text-[#828282]">
                  123 street name, city, england
                </p>
              </div>
              <div className="space-y-1">
                <p className="font-medium">phone:</p>
                <p className="font-roboto text-[#828282]">(+62) 87878787</p>
              </div>
              <div className="space-y-1">
                <p className="font-medium">email:</p>
                <p className="font-roboto text-[#828282]">email@example.com</p>
              </div>
              <div className="space-y-1">
                <p className="font-medium">working days/hours</p>
                <p className="font-roboto text-[#828282]">
                  mon-sun/9:00am - 8:00pm
                </p>
              </div>
            </div>
          )}
          <div className="hidden space-y-2 text-xs md:block">
            <div className="space-y-1">
              <p className="font-medium">address:</p>
              <p className="font-roboto text-[#828282]">
                123 street name, city, england
              </p>
            </div>
            <div className="space-y-1">
              <p className="font-medium">phone:</p>
              <p className="font-roboto text-[#828282]">(+62) 87878787</p>
            </div>
            <div className="space-y-1">
              <p className="font-medium">email:</p>
              <p className="font-roboto text-[#828282]">email@example.com</p>
            </div>
            <div className="space-y-1">
              <p className="font-medium">working days/hours</p>
              <p className="font-roboto text-[#828282]">
                mon-sun/9:00am - 8:00pm
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "social media") {
    return (
      <div className="w-full justify-center border-b border-[#4F4F4F] uppercase md:flex md:w-1/4 md:border-none lg:w-2/12 lg:justify-start">
        <div className="space-y-3 pb-3.5 md:w-fit md:p-0">
          <div className="flex items-start justify-between">
            <p className="font-oswald text-sm font-medium">{children}</p>
            <button
              onClick={showHandler}
              className="w-fit border-none outline-none md:hidden"
            >
              {showMenu ? (
                <img src="/min.svg" className="h-[18px] w-[18px]" />
              ) : (
                <img src="/plus.svg" className="h-[18px] w-[18px]" />
              )}
            </button>
          </div>
          {showMenu && (
            <div className="space-y-5 font-roboto text-xs uppercase text-[#828282]">
              <div className="flex items-center gap-x-4">
                <img src="/facebook.svg" className="h-5 w-5" />
                <p>facebook</p>
              </div>
              <div className="flex items-center gap-x-4">
                <img src="/twitter.svg" className="h-5 w-5" />
                <p>twitter</p>
              </div>
              <div className="flex items-center gap-x-4">
                <img src="/instagram.svg" className="h-5 w-5" />
                <p>instagram</p>
              </div>
            </div>
          )}
          <div className="hidden space-y-5 font-roboto text-xs uppercase text-[#828282] md:block">
            <div className="flex items-center gap-x-4">
              <img src="/facebook.svg" className="h-5 w-5" />
              <p>facebook</p>
            </div>
            <div className="flex items-center gap-x-4">
              <img src="/twitter.svg" className="h-5 w-5" />
              <p>twitter</p>
            </div>
            <div className="flex items-center gap-x-4">
              <img src="/instagram.svg" className="h-5 w-5" />
              <p>instagram</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full justify-center border-b border-[#4F4F4F] md:flex md:w-1/4 md:border-none lg:w-2/12 lg:justify-start">
      <div className="space-y-3 pb-3.5 md:w-fit md:p-0">
        <div className="flex items-start justify-between">
          <p className="font-oswald text-sm font-medium uppercase">
            {children}
          </p>
          <button
            onClick={showHandler}
            className="w-fit border-none outline-none md:hidden"
          >
            {showMenu ? (
              <img className="h-[18px] w-[18px]" src="/min.svg" />
            ) : (
              <img src="/plus.svg" className="h-[18px] w-[18px]" />
            )}
          </button>
        </div>
        {showMenu && <FooterMenu />}
        <div className="hidden space-y-1.5 text-xs uppercase text-[#828282] md:block">
          {links ? (
            links.map((link) => (
              <p key={link} className="font-roboto">
                {link}
              </p>
            ))
          ) : (
            <p>no Data</p>
          )}
        </div>
      </div>
    </div>
  );
}

function FooterMenu() {
  return (
    <div className="space-y-1.5 font-roboto text-xs uppercase text-[#828282]">
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
