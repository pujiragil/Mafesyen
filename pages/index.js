import Banner from "../components/Banner";
import Brand from "../components/Brand";
import { Card, MainCard, SingleCard } from "../components/Card";
import Catalog from "../components/Catalog/catalogContainer";
import CatalogSlider from "../components/Catalog/catalogSlider";
import BaseLayout from "../components/Layout/baseLayout";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <BaseLayout title={"Mafesyen - Welcome back"}>
      <Slider />
      <Brand />
      <div className="mb-3.5 md:mx-3.5 lg:mb-8 md:grid grid-cols-2 grid-rows-2 h-auto md:h-[500px] md:gap-3.5 lg:gap-8">
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
      <SingleCard />
      <CatalogSlider title={"Featured Items:"} />
      <CatalogSlider title={"Most Popular:"} />
      <Banner />
    </BaseLayout>
  );
}
