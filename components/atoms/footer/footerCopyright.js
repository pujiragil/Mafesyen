import { Text } from "@/components/atoms";

const textType = {
  weight: 700,
  size: "xs",
  color: "white",
  family: "roboto",
  className: "text-center uppercase lg:text-left",
};

const FooterCopyright = () => {
  return <Text {...textType}>© 2023. Crisp Developed by Puji Ragil</Text>;
};

export default FooterCopyright;
