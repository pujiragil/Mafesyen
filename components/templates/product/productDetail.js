import { useState } from "react";
import Image from "next/image";

import { cn } from "@/utils/utils";

import { ProductSlider } from "@/components/organism";
import {
  ProductHead,
  ProductInputQuantity,
  ProductInputSize,
} from "@/components/molecules";
import { Button, ProductPrice } from "@/components/atoms";
import SectionLayout from "@/components/Layout/sectionLayout";

const ProductDetail = ({ data }) => {
  const [product, setProduct] = useState(0);

  return (
    <SectionLayout>
      <div className="mx-3.5 grid grid-cols-1 md:grid-cols-2 md:gap-6 lg:gap-10">
        <ProductSlider key={product} productImages={data?.images[product]} />

        <div className="grid place-items-center">
          <div className="grid w-full gap-4 sm:w-2/3 md:w-full">
            <ProductHead tag="fendi" title={data.title} className="md:w-4/5" />
            <ProductPrice value="90,00 eur" />
            <div className="grid gap-4 sm:grid-cols-2 md:flex md:gap-8 lg:flex-col lg:gap-4">
              {/* <ProductInputColor label="select color" /> */}
              <div className="flex gap-2">
                {data?.images?.map((image, idx) => (
                  <div
                    key={idx}
                    onClick={() => setProduct(idx)}
                    className={cn(
                      "h-16 w-16 cursor-pointer border p-1",
                      product === idx ? "border-black" : "border-transparent"
                    )}
                  >
                    <Image
                      width={1920}
                      height={1280}
                      src={`/images/dress/${image[0].link}`}
                      alt={image[0].alt}
                      blurDataURL={image[0].blurDataUrl}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                ))}
              </div>
              <ProductInputQuantity label="quantity" />
            </div>
            <ProductInputSize label="select size (inches)" />

            <div className="flex gap-3.5 lg:w-2/3">
              <button className="h-12 w-full bg-black font-oswald text-xs font-medium uppercase text-white outline-none md:text-sm">
                buy now
              </button>
              <Button variant="secondary" width="full">
                add to cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default ProductDetail;
