import Image from "next/image";
import {
  ProductCardContext,
  useProductCardContext,
} from "../../../contexts/productContext";
import { Category, Text } from "@/components/atoms";

export const ProductCard = ({ image, info, price, color, data }) => {
  return (
    <ProductCardContext.Provider value={data}>
      <div className="space-y-2">
        {image}
        <div className="space-y-2">
          {info}
          {price}
          {color}
        </div>
      </div>
    </ProductCardContext.Provider>
  );
};

export const ProductImage = () => {
  const data = useProductCardContext();

  return (
    <div className="w-full overflow-hidden">
      <Image
        width={344}
        height={450}
        src={data?.imgLink}
        alt={data?.imgAlt}
        className="h-56 w-full cursor-pointer object-cover duration-200 ease-in-out hover:scale-110 md:h-64"
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
