import SectionLayout from "@/components/Layout/sectionLayout";
import { OfferCard } from "@/components/molecules";

const OfferCardSection = () => {
  return (
    <SectionLayout>
      <div className="mx-3.5 h-full space-y-3.5 md:grid md:h-[500px] md:grid-cols-2 md:grid-rows-2 md:gap-3.5 md:space-y-0 lg:h-[560px] lg:gap-8">
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
    </SectionLayout>
  );
};

export default OfferCardSection;
