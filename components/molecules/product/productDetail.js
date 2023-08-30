import { cn } from "@/utils/utils";
import { useDropdown } from "@hooks";
import { DropdownTrigger, DropdownWrapper } from "@/components/atoms";

const ProductDetail = () => {
  const [isOpen, setIsOpen] = useDropdown();

  return (
    <div
      className={cn(
        isOpen && "space-y-4 lg:space-y-5",
        "w-full bg-[#F8F9FB] p-3 lg:p-4"
      )}
    >
      <DropdownTrigger
        open={isOpen}
        onOpen={setIsOpen}
        className="text-xl md:text-2xl"
      >
        Details
      </DropdownTrigger>

      <DropdownWrapper isOpen={isOpen}>
        <div className="grid gap-3 lg:w-2/3 lg:gap-4 ">
          <div className="space-y-2 text-xs md:text-sm">
            <p className="font-oswald uppercase text-black">about product</p>
            <p className="font-roboto text-[#3F3F3F]">
              Cool off this summer in the Mini Ruffle Smocked Tank Top from our
              very own LA Hearts. This tank features a smocked body, adjustable
              straps, scoop neckline, ruffled hems, and a cropped fit.
            </p>
          </div>

          <div className="space-y-2 text-xs md:text-sm">
            <p className="font-oswald uppercase text-black">shipping</p>
            <p className="font-roboto text-[#3F3F3F]">
              We offer Free Standard Shipping for all orders over $75 to the 50
              states and the District of Columbia. The minimum order value must
              be $75 before taxes, shipping and handling. Shipping fees are
              non-refundable.
            </p>
            <p className="font-roboto text-[#3F3F3F]">
              Please allow up to 2 business days (excluding weekends, holidays,
              and sale days) to process your order.
            </p>
            <p className="font-roboto text-[#3F3F3F]">
              Processing Time + Shipping Time = Delivery Time
            </p>
          </div>

          <div className="space-y-2 text-xs md:text-sm">
            <p className="font-oswald uppercase text-black">advantages</p>
            <ul className="grid list-inside list-disc gap-1.5 font-roboto text-[#3F3F3F]">
              <li>Smocked body</li>
              <li>Adjustable straps</li>
              <li>Scoop neckline</li>
              <li>Ruffled hems</li>
              <li>Cropped length</li>
              <li>Model is wearing a small</li>
              <li>100% rayon</li>
              <li>Machine washable</li>
            </ul>
          </div>
        </div>
      </DropdownWrapper>
    </div>
  );
};

export default ProductDetail;
