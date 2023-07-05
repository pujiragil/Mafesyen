import { memo, useState } from "react";
import { BaseCheckbox } from "@/components/atoms";

const DressCheckboxItem = ({ children }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label htmlFor="item" className="flex items-center gap-2">
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

export default memo(DressCheckboxItem);
