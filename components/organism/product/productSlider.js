import { memo, useState } from "react";

import { ProductSliderImage, ProductSliderThumb } from "@/components/molecules";

const ProductSlider = ({ productImages }) => {
  const [thumbSlider, setThumbSlider] = useState(null);

  return (
    <div className="block sm:min-h-[500px] md:min-h-[600px] lg:grid lg:grid-cols-[80px_1fr] lg:gap-4">
      <ProductSliderThumb onSlide={setThumbSlider} data={productImages} />
      <ProductSliderImage thumb={thumbSlider} data={productImages} />
    </div>
  );
};

export default memo(ProductSlider);
