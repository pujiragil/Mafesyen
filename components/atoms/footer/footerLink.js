import Link from "next/link";

const FooterLink = ({ children, to, ...props }) => {
  return (
    <Link className="w-fit block" href={to} {...props}>
      <p className="font-roboto text-xs font-normal uppercase text-[#C4C4C4]">
        {children}
      </p>
    </Link>
  );
};

export default FooterLink;
