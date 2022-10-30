import { Head } from "../Global";

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
    <div className="w-full space-y-4">
      <FooterLink>features</FooterLink>
      <FooterLink>menu</FooterLink>
      <FooterLink>contact us</FooterLink>
      <FooterLink>follow us</FooterLink>
    </div>
  );
}

function FooterLink({ children }) {
  return (
    <div className="flex justify-between items-start pb-3.5 border-b border-[#4F4F4F]">
      <p className="uppercase text-sm font-medium">{children}</p>
      <button className="w-fit border-none outline-none"><img className="w-[18px] h-[18px]" src="/plus.svg" /></button>
    </div>
  );
}
