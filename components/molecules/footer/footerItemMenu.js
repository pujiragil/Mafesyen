import { memo } from "react";
import { FooterContact, FooterLink, FooterSocial } from "@/components/atoms";

const menuTypes = (type, data) => {
  switch (type) {
    case "link": {
      return data.map((menu) => (
        <FooterLink to={`/${menu}`}>{menu}</FooterLink>
      ));
    }

    case "contact": {
      return data.map((contact) => (
        <FooterContact key={contact.id} {...contact} />
      ));
    }

    case "social": {
      return data.map((social) => <FooterSocial key={social.id} {...social} />);
    }

    default: {
      throw new Error("unexpected menu types");
    }
  }
};

const FooterItemMenu = ({ type, data }) => {
  return menuTypes(type, data);
};

export default memo(FooterItemMenu);
