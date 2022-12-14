import { DetailButton } from "../Global";
import { CatalogSidebar } from "../Sidebar/catalogSidebar";
import CatalogItem from "./catalogItem";

export default function Catalog() {
  return (
    <div className="mx-3.5 mb-3.5 lg:mb-8 lg:flex gap-x-8">
      <h3 className="text-lg md:text-xl lg:hidden mb-4">Shop Some Wear:</h3>

      <div className="hidden lg:block w-3/12">
        <CatalogSidebar />
      </div>

      <div className="w-full lg:pb-[18px]">
        <div className="mb-[18px] lg:mb-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5 lg:gap-6">
          <CatalogItem imgLink={"/images/dress-1.png"} />
          <CatalogItem imgLink={"/images/dress-2.png"} />
          <CatalogItem imgLink={"/images/dress-3.png"} />
          <CatalogItem imgLink={"/images/dress-4.png"} />
          <CatalogItem imgLink={"/images/dress-5.png"} />
          <CatalogItem imgLink={"/images/dress-6.png"} />
          <CatalogItem imgLink={"/images/dress-7.png"} />
          <CatalogItem imgLink={"/images/dress-8.png"} />
        </div>
        <DetailButton />
      </div>
    </div>
  );
}
