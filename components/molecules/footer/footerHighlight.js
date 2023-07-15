import SectionLayout from "@/components/Layout/sectionLayout";
import { FooterHighlightItem } from "@/components/molecules";

const FooterHighlight = () => {
  return (
    <SectionLayout background="bg-[#E6F1FA]">
      <div className="mx-3.5 grid place-items-center p-5 md:h-28 md:p-6">
        <div className="flex flex-col gap-2 md:w-full md:flex-row md:justify-between">
          <FooterHighlightItem>Duties and Taxes Guaranteed</FooterHighlightItem>
          <FooterHighlightItem>Free Express Shipping</FooterHighlightItem>
          <FooterHighlightItem>Customer Love</FooterHighlightItem>
          <FooterHighlightItem>Easy Returns</FooterHighlightItem>
          <FooterHighlightItem>Secure Payment</FooterHighlightItem>
        </div>
      </div>
    </SectionLayout>
  );
};

export default FooterHighlight;
