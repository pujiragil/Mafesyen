import { DetailButton } from "../Global";
import CatalogItem from "./catalogItem";

export default function Catalog() {
  return (
    <div className="mx-3.5 mb-[18px]">
      <h3 className="text-lg mb-4">Shop Some Wear:</h3>
      <div className="mb-[18px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5">
        <CatalogItem imgLink={"/images/dress-1.png"}/>
        <CatalogItem imgLink={"/images/dress-2.png"}/>
        <CatalogItem imgLink={"/images/dress-3.png"}/>
        <CatalogItem imgLink={"/images/dress-4.png"}/>
        <CatalogItem imgLink={"/images/dress-5.png"}/>
        <CatalogItem imgLink={"/images/dress-6.png"}/>
        <CatalogItem imgLink={"/images/dress-7.png"}/>
        <CatalogItem imgLink={"/images/dress-8.png"}/>
      </div>
      <DetailButton />
    </div>
  )
}