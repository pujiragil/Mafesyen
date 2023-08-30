import { useState, memo } from "react";
import { BaseCheckbox } from "@/components/atoms";

const DressesCheckbox = ({ data }) => {
  return (
    <div className="grid gap-2 md:gap-4">
      {data.map((dress) => (
        <DressCheckboxItem key={dress} dress={dress} />
      ))}
    </div>
  );
};

const DressCheckboxItem = ({ dress }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <BaseCheckbox
      checked={isChecked}
      onChecked={() => setIsChecked((prevCheck) => !prevCheck)}
    >
      {dress}
    </BaseCheckbox>
  );
};

export default memo(DressesCheckbox);
