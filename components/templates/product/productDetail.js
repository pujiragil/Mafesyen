import { useState } from "react";

import { ProductSlider } from "@/components/organism";
import { Button, ProductPrice } from "@/components/atoms";
import {
  ProductAdditionalTags,
  ProductHead,
  ProductInputImage,
  ProductInputQuantity,
  ProductInputSize,
} from "@/components/molecules";
import SectionLayout from "@/components/Layout/sectionLayout";

const ProductDetail = ({ data }) => {
  const [product, setProduct] = useState(0);

  return (
    <SectionLayout>
      <div className="mx-3.5 grid grid-cols-1 md:grid-cols-2 md:gap-6 lg:gap-10">
        <ProductSlider key={product} productImages={data?.images[product]} />

        <div className="grid place-items-center md:py-3.5">
          <div className="w-full space-y-4 sm:w-2/3 md:w-full">
            <ProductHead tag="fendi" title={data.title} className="md:w-4/5" />
            <ProductPrice value={data.price} />

            <div className="grid gap-4 sm:grid-cols-2 sm:content-start lg:w-2/3">
              <ProductInputImage
                label="select color"
                images={data.images}
                selectImage={product}
                onSelectImage={setProduct}
              />

              <ProductInputQuantity label="quantity" />
            </div>

            <ProductInputSize label="select size (inches)" />

            <div className="flex gap-3.5 lg:w-2/3">
              <Button variant="primary" width="full">
                buy now
              </Button>
              <Button variant="secondary" width="full">
                add to cart
              </Button>
            </div>

            <ProductAdditionalTags />
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default ProductDetail;
