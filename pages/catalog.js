import { BannerCardSection } from "@/components/molecules";
import Filter from "../components/Filter";
import BaseLayout from "../components/Layout/baseLayout";

export default function Catalog() {
  return (
    <BaseLayout title={"Mafesyen - Catalog Page"}>
      <BannerCardSection
        title="shoping without limits."
        desc="You can choose the best option for you, and it does not matter whether you are in Prague or San Francisco. We will deliver your purchase anywhere!"
        btnHref="/catalog"
        btnText="see offers"
        imgBg="/images/card-4.webp"
      />
      <Filter />
    </BaseLayout>
  );
}
