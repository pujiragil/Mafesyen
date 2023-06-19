import Banner from "../components/Banner";
import Blog from "../components/Blog";
import { Brand } from "@/components/molecules";
import { Card, MainCard, SingleCard } from "../components/Card";
import Catalog from "../components/Catalog/catalogContainer";
import BaseLayout from "../components/Layout/baseLayout";
import { ProductCardSlider } from "../components/templates";
import { HeroSlider } from "@/components/organism";

export default function Home() {
  return (
    <BaseLayout title={"Mafesyen - Welcome back"}>
      <HeroSlider />
      <Brand />
      <div className="mb-3.5 h-auto grid-cols-2 grid-rows-2 md:mx-3.5 md:grid md:h-[500px] md:gap-3.5 lg:mb-8 lg:gap-8">
        <Card
          order={"order-1"}
          primary={true}
          imgLink={"/images/card-1.png"}
          tagline={"choose your look"}
          desc={"See our clothing collections"}
          textButton={"see offers"}
        />
        <MainCard />
        <Card
          order={"order-2"}
          primary={false}
          imgLink={"/images/card-2.png"}
          tagline={"brand new style"}
          desc={"Popular clothing brands"}
          textButton={"see offers"}
        />
      </div>
      <Catalog />
      <SingleCard bgLink={"/images/card-3.png"} />
      <ProductCardSlider title="Featured Items:" />
      <ProductCardSlider title="Most Popular:" />
      <Banner />
      <Blog />
    </BaseLayout>
  );
}
