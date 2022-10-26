import Brand from "../components/Brand";
import { Card, MainCard } from "../components/Card";
import Catalog from "../components/Catalog/catalogContainer";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Slider />
      <Brand />
      <div className="mb-3.5 lg:mb-8 md:grid grid-cols-2 grid-rows-2 h-auto md:h-[500px] lg:h-[500px] md:gap-2 lg:gap-8">
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
    </div>
  );
}