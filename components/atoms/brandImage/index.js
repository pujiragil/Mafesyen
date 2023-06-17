import Image from "next/image";
import { cn } from "@/utils/utils";

const BrandImage = ({ src, alt, width, height, className }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn("h-16 w-full object-cover md:h-20 lg:h-auto", className)}
    />
  );
};

export default BrandImage;
