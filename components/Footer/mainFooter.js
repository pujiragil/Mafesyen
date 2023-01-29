import { useState } from "react";
import { features, menu } from "../../utils/footer-links";
import { Head } from "../Global";
import Subcription from "./Subscription";

export default function MainFooter() {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto font-">
        <div className="px-3.5 py-7 flex flex-col items-center">
          <FooterWrap />
        </div>
      </div>
    </div>
  );
}

function FooterWrap() {
  return (
    <div className="w-full h-full space-y-4 md:space-y-0 md:flex flex-wrap gap-y-7">
      <div className="mb-7 md:m-0 w-full lg:w-2/12 flex justify-center lg:justify-start">
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
      <div className="uppercase w-full md:w-1/4 lg:w-2/12 border-b border-[#4F4F4F] md:border-none md:flex justify-center lg:justify-start">
        <div className="space-y-3 pb-3.5 md:p-0 md:w-fit">
          <div className="flex justify-between items-start">
            <p className="text-sm font-medium font-oswald">{children}</p>
            <button
              onClick={showHandler}
              className="md:hidden w-fit border-none outline-none"
            >
              {showMenu ? (
                <img src="/min.svg" className="w-[18px] h-[18px]" />
              ) : (
                <img src="/plus.svg" className="w-[18px] h-[18px]" />
              )}
            </button>
          </div>
          {showMenu && (
            <div className="text-xs space-y-2">
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
          <div className="hidden md:block text-xs space-y-2">
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
      <div className="uppercase w-full md:w-1/4 lg:w-2/12 border-b border-[#4F4F4F] md:border-none md:flex justify-center lg:justify-start">
        <div className="space-y-3 pb-3.5 md:p-0 md:w-fit">
          <div className="flex justify-between items-start">
            <p className="text-sm font-medium font-oswald">{children}</p>
            <button
              onClick={showHandler}
              className="md:hidden w-fit border-none outline-none"
            >
              {showMenu ? (
                <img src="/min.svg" className="w-[18px] h-[18px]" />
              ) : (
                <img src="/plus.svg" className="w-[18px] h-[18px]" />
              )}
            </button>
          </div>
          {showMenu && (
            <div className="font-roboto text-xs text-[#828282] uppercase space-y-5">
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
          <div className="hidden md:block font-roboto text-xs text-[#828282] uppercase space-y-5">
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
    <div className="w-full md:w-1/4 lg:w-2/12 border-b border-[#4F4F4F] md:border-none md:flex justify-center lg:justify-start">
      <div className="space-y-3 pb-3.5 md:p-0 md:w-fit">
        <div className="flex justify-between items-start">
          <p className="uppercase text-sm font-medium font-oswald">{children}</p>
          <button
            onClick={showHandler}
            className="md:hidden w-fit border-none outline-none"
          >
            {showMenu ? (
              <img className="w-[18px] h-[18px]" src="/min.svg" />
            ) : (
              <img src="/plus.svg" className="w-[18px] h-[18px]" />
            )}
          </button>
        </div>
        {showMenu && <FooterMenu />}
        <div className="hidden md:block uppercase text-xs text-[#828282] space-y-1.5">
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
    <div className="uppercase font-roboto text-xs text-[#828282] space-y-1.5">
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
