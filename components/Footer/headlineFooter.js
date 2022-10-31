export default function HeadlineFooter() {
  return (
    <div className="bg-[#E6F1FA] ">
      <div className="container mx-auto">
        <div className="p-4 flex justify-center items-center md:px-3.5 md:h-24 lg:p-0">
          <div className="space-y-2 md:space-0 md:flex justify-between lg:justify-evenly items-center md:w-full h-full">
            <HeadlineItem>Duties and Taxes Guaranteed</HeadlineItem>
            <HeadlineItem>Free Express Shipping</HeadlineItem>
            <HeadlineItem>Customer Love</HeadlineItem>
            <HeadlineItem>Easy Returns</HeadlineItem>
            <HeadlineItem>Secure Payment</HeadlineItem>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeadlineItem({ children }) {
  return (
    <div className="flex items-center gap-3.5">
      <img src="/check.svg" className="h-8 w-8" />
      <h4 className="text-sm md:text-base">{children}</h4>
    </div>
  );
}
