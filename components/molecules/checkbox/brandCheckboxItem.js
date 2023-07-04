import { BaseCheckbox } from "@/components/atoms";
import { useState } from "react";

const BrandCheckboxItem = ({ children }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label htmlFor="item" className="block space-x-2">
      <BaseCheckbox
        checked={isChecked}
        onChecked={() => setIsChecked((prevCheck) => !prevCheck)}
      />
      <span id="item" className="text-roboto text-[10px] uppercase">
        {children}
      </span>
    </label>
  );
};

export default BrandCheckboxItem;
