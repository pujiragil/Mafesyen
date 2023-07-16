import SectionLayout from "@/components/Layout/sectionLayout";
import { FooterHighlightItem } from "@/components/molecules";

const highlights = [
  "Duties and Taxes Guaranteed",
  "Free Express Shipping",
  "Customer Love",
  "Easy Returns",
  "Secure Payment",
];

const FooterHighlight = () => {
  return (
    <SectionLayout background="bg-[#E6F1FA]">
      <div className="mx-3.5 grid place-items-center p-5 md:h-28 md:p-6">
        <div className="flex flex-col gap-2 md:w-full md:flex-row md:justify-between">
          {highlights.map((highlight, idx) => (
            <FooterHighlightItem key={idx}>{highlight}</FooterHighlightItem>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};

export default FooterHighlight;
