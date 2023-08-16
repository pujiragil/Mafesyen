import { useState } from "react";

import { CatalogSliderSection } from "@/components/templates";
import { ProductSlider } from "@/components/organism";
import { ProductPrice } from "@/components/atoms";
import {
  ProductAdditionalTags,
  ProductCheckoutButtons,
  ProductDetail,
  ProductHead,
  ProductInputImage,
  ProductInputQuantity,
  ProductInputSize,
} from "@/components/molecules";
import SectionLayout from "@/components/Layout/sectionLayout";

const ProductSection = ({ data }) => {
  const [product, setProduct] = useState(0);

  return (
    <SectionLayout>
      <div className="mx-3.5 grid py-3.5 gap-8 lg:place-items-center">
        <div className="space-y-10 lg:w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
            <ProductSlider
              key={product}
              productImages={data?.images[product]}
            />

            <div className="grid place-items-center">
              <div className="w-full space-y-4 sm:w-2/3 md:w-full">
                <ProductHead
                  tag="fendi"
                  title={data.title}
                  className="md:w-4/5"
                />
                <ProductPrice value={data.price} />

                <div className="space-y-4 lg:w-9/12">
                  <div className="grid gap-4 sm:grid-cols-2 sm:content-start">
                    <ProductInputImage
                      label="select color"
                      images={data.images}
                      selectImage={product}
                      onSelectImage={setProduct}
                    />
                    <ProductInputQuantity label="quantity" />
                  </div>

                  <ProductInputSize label="select size (inches)" />
                  <ProductCheckoutButtons />
                  <ProductAdditionalTags />
                </div>
              </div>
            </div>
          </div>

          <ProductDetail />
          <CatalogSliderSection title="You May Also Like" />
        </div>
      </div>
    </SectionLayout>
  );
};

export default ProductSection;
