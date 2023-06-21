import Banner from "../components/Banner";
import Blog from "../components/Blog";
import { Brand } from "@/components/molecules";
import { SingleCard } from "../components/Card";
import Catalog from "../components/Catalog/catalogContainer";
import BaseLayout from "../components/Layout/baseLayout";
import { ProductCardSlider } from "../components/templates";
import { HeroSlider, OfferCardSection } from "@/components/organism";

export default function Home() {
  return (
    <BaseLayout title={"Mafesyen - Welcome back"}>
      <HeroSlider />
      <Brand />
      <OfferCardSection />
      <Catalog />
      <SingleCard bgLink={"/images/card-3.png"} />
      <ProductCardSlider title="Featured Items:" />
      <ProductCardSlider title="Most Popular:" />
      <Banner />
      <Blog />
    </BaseLayout>
  );
}
