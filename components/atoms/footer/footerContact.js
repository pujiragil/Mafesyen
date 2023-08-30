import { Text } from "@/components/atoms";

const titleType = {
  weight: 500,
  size: "xs",
  color: "white",
  family: "oswald",
};

const descType = {
  weight: 300,
  size: "xs",
  color: "gray",
  family: "roboto",
};

const FooterContact = ({ title, desc }) => {
  return (
    <div className="space-y-1 uppercase">
      <Text {...titleType}>{title}</Text>
      <Text {...descType}>{desc}</Text>
    </div>
  );
};

export default FooterContact;
