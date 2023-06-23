import BannerSection from "../components/Banner";
import Blog from "../components/Blog";
import { BannerCardSection, BrandSection } from "@/components/molecules";
import CatalogSection from "../components/Catalog/catalogContainer";
import BaseLayout from "../components/Layout/baseLayout";
import { CatalogSliderSection } from "@/components/templates";
import { HeroSliderSection, OfferCardSection } from "@/components/organism";

export default function Home() {
  return (
    <BaseLayout title={"Mafesyen - Welcome back"}>
      <HeroSliderSection />
      <BrandSection />
      <OfferCardSection />
      <CatalogSection />
      <BannerCardSection
        title="shoping without limits."
        desc="You can choose the best option for you, and it does not matter whether you are in Prague or San Francisco. We will deliver your purchase anywhere!"
        btnHref="/catalog"
        btnText="see offers"
        imgBg="/images/card-3.webp"
      />
      <CatalogSliderSection title="Featured Items:" />
      <CatalogSliderSection title="Most Popular:" />
      <BannerSection />
      <Blog />
    </BaseLayout>
  );
}
