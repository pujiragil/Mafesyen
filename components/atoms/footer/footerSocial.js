import { Text } from "@/components/atoms";

const textType = {
  weight: 300,
  size: "xs",
  color: "gray",
  family: "roboto",
  className: "uppercase",
};

const FooterSocial = ({ icon, name, to }) => {
  return (
    <a className="block w-fit" href={to} target="_blank">
      <div className="flex items-center gap-4">
        {icon}
        <Text {...textType}>{name}</Text>
      </div>
    </a>
  );
};

export default FooterSocial;
