import HeadlineFooter from "@/components/Footer/headlineFooter";
import { Facebook, Instagram, Mafesyen, Twitter } from "@/components/assets";
import { FooterCopyright } from "@/components/atoms";
import {
  FooterItem,
  FooterSubscription,
} from "@/components/molecules";

const features = [
  "men",
  "women",
  "boys",
  "girls",
  "new arrivals",
  "shoes",
  "clothes",
  "accessories",
];

const menus = [
  "about us",
  "contact us",
  "my account",
  "orders history",
  "my wishlist",
  "blog",
  "login",
];

const contacts = [
  {
    id: "address",
    title: "address",
    desc: "123 STREET NAME, CITY, ENGLAND",
  },
  {
    id: "phone",
    title: "phone",
    desc: "(123) 456-7890",
  },
  {
    id: "email",
    title: "email",
    desc: "mail@example.com",
  },
  {
    id: "working",
    title: "working days/hours",
    desc: "mon - sun / 9:00am - 8:00 pm",
  },
];

const socials = [
  {
    id: "facebook",
    icon: <Facebook />,
    name: "facebook",
    to: "https://facebook.com",
  },
  {
    id: "twitter",
    icon: <Twitter />,
    name: "twitter",
    to: "https://twitter.com",
  },
  {
    id: "instagram",
    icon: <Instagram />,
    name: "instagram",
    to: "https://instagram.com/ragilsg_164",
  },
];

const footerItems = [
  <FooterItem key="features" type="link" title="features" data={features} />,
  <FooterItem key="menu" type="link" title="menu" data={menus} />,
  <FooterItem
    key="contact us"
    type="contact"
    title="contact us"
    data={contacts}
  />,
  <FooterItem
    key="follow us"
    type="social"
    title="follow us"
    className=""
    data={socials}
  />,
];

const Footer = () => {
  const footerItemComponents = footerItems.map((value) => value);

  return (
    <>
      <HeadlineFooter />
      <footer className="bg-black">
        <div className="container mx-auto">
          <div className="mx-3.5 space-y-10 py-8">
            <div className="grid gap-6 lg:grid-cols-6 lg:gap-0">
              {/* icon */}
              <div className="flex justify-center lg:col-span-1 lg:justify-start">
                <Mafesyen className="h-10 w-auto" />
              </div>

              {/* menu */}
              <div className="md:grid md:grid-cols-4 lg:col-span-4">
                {footerItemComponents}
              </div>

              {/* subscription */}
              <div className="flex justify-center lg:col-span-1">
                <FooterSubscription />
              </div>
            </div>

            <FooterCopyright />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
