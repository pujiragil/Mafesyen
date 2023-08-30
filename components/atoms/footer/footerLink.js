import { Text } from "@/components/atoms";
import Link from "next/link";

const textType = {
  weight: 300,
  size: "xs",
  color: "gray",
  family: "roboto",
  className: "uppercase",
};

const FooterLink = ({ children, to, ...props }) => {
  return (
    <Link className="block w-fit" href={to} {...props}>
      <Text {...textType}>{children}</Text>
    </Link>
  );
};

export default FooterLink;
