import { useMemo } from "react";
import BaseLayout from "./baseLayout";
import SectionLayout from "./sectionLayout";
import Link from "next/link";
import { cn } from "@/utils/utils";
import { useRouter } from "next/router";
import { useDropdown } from "@hooks";

const userAccessMenu = [
  {
    id: "dashboard",
    to: "/user/dashboard",
    name: "Account Dashboard",
  },
  {
    id: "information",
    to: "/user/information",
    name: "Account Information",
  },
  {
    id: "address",
    to: "/user/address",
    name: "Adress Book",
  },
  {
    id: "orders",
    to: "/user/orders",
    name: "My Orders",
  },
  {
    id: "wishlist",
    to: "/user/wishlist",
    name: "My Wishlist",
  },
];

const UserAccessLayout = ({ children, title }) => {
  return (
    <BaseLayout title={`Mafesyen - ${title}`}>
      <SectionLayout>
        <div className="mx-3.5 grid place-items-center py-3.5 md:gap-6 lg:gap-16 lg:py-10">
          <h1 className="hidden font-oswald text-2xl font-normal text-black md:block lg:text-3xl">
            {title}
          </h1>
          <div className="grid w-full max-w-md gap-4 sm:max-w-none md:grid-cols-[1fr_3fr] md:gap-2 lg:grid-cols-[1fr_4fr]">
            <MenuDropdown title={title} />

            <UserAccessSidebar />

            <div className="grid gap-2.5">
              <h1 className="border-b border-[#C4C4C4] pb-2.5 font-oswald text-xl font-normal text-black md:hidden">
                {title}
              </h1>

              {children}
            </div>
          </div>
        </div>
      </SectionLayout>
    </BaseLayout>
  );
};

const MenuDropdown = ({ title }) => {
  const [isOpen, setIsOpen] = useDropdown();

  return (
    <div className="border border-black md:hidden">
      <div
        onClick={setIsOpen}
        className={cn(
          "flex",
          "px-2.5",
          "h-10 w-full",
          "bg-[#F0F1F2]",
          "cursor-pointer",
          "items-center justify-between"
        )}
      >
        <p className="font-oswald text-xs font-medium uppercase text-black">
          {title}
        </p>

        <svg
          className={cn(
            "w-3 md:w-4",
            "cursor-pointer",
            "stroke-black",
            "rotate-180"
          )}
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 5L5 1L1 5" />
        </svg>
      </div>

      <div
        className={cn(
          "grid",
          "transition-all duration-300 ease-out",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className="border-t border-black">
            {userAccessMenu.map((data) => (
              <MenuLink
                key={data.id}
                className="text-xs font-medium uppercase"
                {...data}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const UserAccessSidebar = () => {
  const menus = useMemo(() => {
    return userAccessMenu.map((data) => <MenuLink key={data.id} {...data} />);
  }, []);

  return <div className="hidden md:block">{menus}</div>;
};

const MenuLink = ({ to, name, className }) => {
  const router = useRouter();
  const activeLink = router.pathname === to ? "text-black" : "text-[#828282]";

  return (
    <Link className="block" href={to}>
      <p
        className={cn(
          "h-10",
          "p-2.5",
          "hover:bg-[#F0F1F2]",
          "font-oswald font-normal",
          activeLink,
          className
        )}
      >
        {name}
      </p>
    </Link>
  );
};

export default UserAccessLayout;
