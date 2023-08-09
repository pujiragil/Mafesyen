import Image from "next/image";

import { cn } from "@/utils/utils";
import { ProductLabel } from "@/components/atoms";

const ProductInputImage = ({ label, images, onSelectImage, selectImage}) => {
  return (
    <div className="space-y-2">
      <ProductLabel>{label}</ProductLabel>

      <div className="flex gap-1 overflow-x-auto sm:pb-2">
        {images?.map((image, idx) => (
          <div
            key={idx}
            onClick={() => onSelectImage(idx)}
            className={cn(
              "h-16 w-16 flex-none cursor-pointer border p-1",
              selectImage === idx ? "border-black" : "border-transparent"
            )}
          >
            <Image
              width={1920}
              height={1280}
              src={`/images/dress/${image[0].link}`}
              alt={image[0].alt}
              blurDataURL={image[0].blurDataUrl}
              placeholder="blur"
              className="h-full w-full object-cover object-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductInputImage;
