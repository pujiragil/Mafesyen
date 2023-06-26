import Image from "next/image";
import { useState } from "react";

import {
  ProductCardContext,
  useProductCardContext,
} from "../../../contexts/productContext";
import { Category, Text } from "@/components/atoms";
import { cn } from "@/utils/utils";

export const ProductCard = ({ image, info, price, color, data }) => {
  return (
    <ProductCardContext.Provider value={data}>
      <div className="space-y-2">
        {image}
        {info}
        {price}
        {color}
      </div>
    </ProductCardContext.Provider>
  );
};

export const ProductImage = () => {
  const data = useProductCardContext();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="w-full overflow-hidden">
      <Image
        width={344}
        height={450}
        src={data?.imgLink}
        alt={data?.imgAlt}
        onLoadingComplete={() => {
          setIsLoading(false);
        }}
        className={cn(
          isLoading
            ? "blur-2xl grayscale"
            : "blur-0 grayscale-0 hover:scale-110",
          "h-56 w-full md:h-64 lg:h-72",
          "cursor-pointer object-cover",
          "transition-transform duration-200 ease-in-out"
        )}
      />
    </div>
  );
};

export const ProductInfo = () => {
  const data = useProductCardContext();

  return (
    <div className="space-y-1">
      <Category intent="primary" value={data?.category} />
      <Text family="oswald" size="xs/lg">
        {data?.name}
      </Text>
    </div>
  );
};

export const ProductPrice = () => {
  const data = useProductCardContext();

  return (
    <Text family="oswald" size="sm/2xl">
      {data?.price}
    </Text>
  );
};

export const ProductColor = () => {};
