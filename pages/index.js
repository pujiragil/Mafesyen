import {
  BannerCardSection,
  BrandSection,
  EventCardSection,
} from "@/components/molecules";
import CatalogSection from "../components/Catalog/catalogContainer";
import BaseLayout from "../components/Layout/baseLayout";
import { BlogSection, HeroSliderSection, OfferCardSection } from "@/components/organism";
import dynamic from "next/dynamic";
import { CatalogSliderSkeleton } from "@/components/templates";

import data from "@/utils/data.json";

const CatalogSliderSection = dynamic(
  () =>
    import("@/components/templates").then((mod) => mod.CatalogSliderSection),
  {
    ssr: false,
    loading: () => <CatalogSliderSkeleton />,
  }
);

export default function Home() {
  const banners = data.banners;

  return (
    <BaseLayout title={"Mafesyen - Welcome back"}>
      <HeroSliderSection />
      <BrandSection />
      <OfferCardSection />
      <CatalogSection />
      <BannerCardSection className="mx-3.5" {...banners.first} />
      <CatalogSliderSection title="Featured Items:" />
      <CatalogSliderSection title="Most Popular:" />
      <EventCardSection />
      <BlogSection />
    </BaseLayout>
  );
}
