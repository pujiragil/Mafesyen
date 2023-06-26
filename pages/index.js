import BannerSection from "../components/Banner";
import Blog from "../components/Blog";
import { BannerCardSection, BrandSection } from "@/components/molecules";
import CatalogSection from "../components/Catalog/catalogContainer";
import BaseLayout from "../components/Layout/baseLayout";
import { HeroSliderSection, OfferCardSection } from "@/components/organism";
import dynamic from "next/dynamic";
import { CatalogSliderSkeleton } from "@/components/templates";

import { banners } from "@/utils/banner";

const CatalogSliderSection = dynamic(
  () =>
    import("@/components/templates").then((mod) => mod.CatalogSliderSection),
  {
    ssr: false,
    loading: () => <CatalogSliderSkeleton />,
  }
);

export default function Home() {
  const { first } = banners;
  return (
    <BaseLayout title={"Mafesyen - Welcome back"}>
      <HeroSliderSection />
      <BrandSection />
      <OfferCardSection />
      <CatalogSection />
      <BannerCardSection {...first} />
      <CatalogSliderSection title="Featured Items:" />
      <CatalogSliderSection title="Most Popular:" />
      <BannerSection />
      <Blog />
    </BaseLayout>
  );
}
