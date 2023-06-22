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
      <BannerCardSection imageBg="/images/card-3.webp" />
      <CatalogSliderSection title="Featured Items:" />
      <CatalogSliderSection title="Most Popular:" />
      <BannerSection />
      <Blog />
    </BaseLayout>
  );
}
