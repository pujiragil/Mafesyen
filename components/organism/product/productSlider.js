import { memo, useState } from "react";

import { ProductSliderImage, ProductSliderThumb } from "@/components/molecules";

const ProductSlider = ({ productImages }) => {
  const [thumbSlider, setThumbSlider] = useState(null);

  return (
    <div className="block py-3.5 sm:min-h-[500px] lg:grid lg:min-h-[560px] lg:grid-cols-[80px_1fr] lg:gap-4">
      <ProductSliderThumb onSlide={setThumbSlider} data={productImages} />
      <ProductSliderImage thumb={thumbSlider} data={productImages} />
    </div>
  );
};

export default memo(ProductSlider);
