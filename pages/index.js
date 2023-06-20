import Banner from "../components/Banner";
import Blog from "../components/Blog";
import { Brand } from "@/components/molecules";
import { SingleCard } from "../components/Card";
import Catalog from "../components/Catalog/catalogContainer";
import BaseLayout from "../components/Layout/baseLayout";
import { ProductCardSlider } from "../components/templates";
import { HeroSlider } from "@/components/organism";
import OfferCard from "@/components/molecules/card/offerCard";

export default function Home() {
  return (
    <BaseLayout title={"Mafesyen - Welcome back"}>
      <HeroSlider />
      <Brand />
      <div className="h-full space-y-3.5 p-3.5 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-3.5 md:space-y-0 lg:gap-8">
        <OfferCard
          variant="secondary"
          order="second"
          data={{
            title: "choose your look",
            description: "See our clothing collections",
            linkTo: "/catalog",
            button: "see offers",
            imageBg: "/images/card-1.webp",
          }}
        />
        <OfferCard
          variant="primary"
          order="first"
          data={{
            title: "up to 40% off",
            description: "Special offers and great deals",
            linkTo: "/catalog",
            button: "see offers",
            imageBg: "/images/main-card.webp",
          }}
        />
        <OfferCard
          variant="secondary"
          order="first"
          data={{
            title: "brand new style",
            description: "Popular clothing brands",
            linkTo: "/catalog",
            button: "see offers",
            imageBg: "/images/card-2.webp",
          }}
        />
      </div>
      {/* <div className="mb-3.5 h-auto grid-cols-2 grid-rows-2 md:mx-3.5 md:grid md:h-[500px] md:gap-3.5 lg:mb-8 lg:gap-8">
        <Card
          order={"order-1"}
          primary={true}
          imgLink={"/images/card-1.webp"}
          tagline={"choose your look"}
          desc={"See our clothing collections"}
          textButton={"see offers"}
        />
        <MainCard />
        <Card
          order={"order-2"}
          primary={false}
          imgLink={"/images/card-2.webp"}
          tagline={"brand new style"}
          desc={"Popular clothing brands"}
          textButton={"see offers"}
        />
      </div> */}
      <Catalog />
      <SingleCard bgLink={"/images/card-3.png"} />
      <ProductCardSlider title="Featured Items:" />
      <ProductCardSlider title="Most Popular:" />
      <Banner />
      <Blog />
    </BaseLayout>
  );
}
