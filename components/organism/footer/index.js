import HeadlineFooter from "@/components/Footer/headlineFooter";
import { Facebook, Instagram, Mafesyen, Twitter } from "@/components/assets";
import { FooterItem, FooterItemMenu } from "@/components/molecules";

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

const Footer = () => {
  return (
    <>
      <HeadlineFooter />
      <footer className="bg-black">
        <div className="container mx-auto">
          <div className="mx-3.5 space-y-10 py-8">
            <div className="grid gap-6">
              {/* icon */}
              <div className="flex justify-center">
                <Mafesyen className="h-10 w-auto" />
              </div>

              {/* menu */}
              <div className="divide-y divide-[#4F4F4F]">
                <FooterItem title="features">
                  <FooterItemMenu type="link" data={features} />
                </FooterItem>

                <FooterItem title="menu">
                  <FooterItemMenu type="link" data={menus} />
                </FooterItem>

                <FooterItem title="contact us">
                  <FooterItemMenu type="contact" data={contacts} />
                </FooterItem>

                <FooterItem title="follow us" className="space-y-3">
                  <FooterItemMenu type="social" data={socials} />
                </FooterItem>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
