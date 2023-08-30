import SectionLayout from "@/components/Layout/sectionLayout";
import { OfferCard } from "@/components/molecules";
import data from "@/utils/data.json";

const OfferCardSection = () => {
  const { first, second, third } = data.offers;

  return (
    <SectionLayout>
      <div className="mx-3.5 h-full space-y-3.5 md:grid md:h-[500px] md:grid-cols-2 md:grid-rows-2 md:gap-3.5 md:space-y-0 lg:h-[560px] lg:gap-8">
        <OfferCard {...first} />
        <OfferCard {...second} />
        <OfferCard {...third} />
      </div>
    </SectionLayout>
  );
};

export default OfferCardSection;
