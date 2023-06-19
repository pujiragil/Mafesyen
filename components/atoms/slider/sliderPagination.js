import { cn } from "@/utils/utils";

const SlidePagination = ({ totalSlides, activeSlide }) => {
  const paginationBullets = totalSlides?.map((slide, idx) => (
    <span
      key={idx}
      className={cn(
        "transition-all duration-200 ease-in-out",
        idx === activeSlide
          ? "h-5 w-5 border border-black bg-black md:h-6 md:w-6"
          : "h-4 w-4 border border-[#828282] bg-transparent md:h-5 md:w-5"
      )}
    ></span>
  ));

  return (
    <div className="flex h-full items-center gap-2 md:absolute md:left-0">
      {paginationBullets}
    </div>
  );
};

export default SlidePagination;
