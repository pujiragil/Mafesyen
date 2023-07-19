import { memo, useState } from "react";
import { BaseCheckbox } from "@/components/atoms";

const BrandsCheckbox = ({ data }) => {
  return (
    <div className="grid gap-2 md:gap-4">
      {data.map((brand) => (
        <BrandCheckboxItem key={brand} brand={brand} />
      ))}
    </div>
  );
};

const BrandCheckboxItem = ({ brand }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <BaseCheckbox
      checked={isChecked}
      onChecked={() => setIsChecked((prevCheck) => !prevCheck)}
    >
      {brand}
    </BaseCheckbox>
  );
};

export default memo(BrandsCheckbox);
