import { BannerCardSection } from "@/components/molecules";
import Filter from "../components/Filter";
import BaseLayout from "../components/Layout/baseLayout";

export default function Catalog() {
  return (
    <BaseLayout title={"Mafesyen - Catalog Page"}>
      <BannerCardSection imageBg="/images/card-4.webp" />
      <Filter />
    </BaseLayout>
  );
}
