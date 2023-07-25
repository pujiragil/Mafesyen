import { RangeInput, Text } from "@/components/atoms";
import { memo, useCallback, useState } from "react";

const PriceRange = ({ minRange, maxRange }) => {
  const [range, setRange] = useState(75);

  const handleRange = useCallback((e) => {
    setRange(parseInt(e.target.value));
  }, []);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <Text
          color="black"
          weight={400}
          family="roboto"
          size="xxs/xs/sm"
          className="uppercase"
        >
          {range}.00 eur
        </Text>
        <Text
          color="black"
          weight={400}
          family="roboto"
          size="xxs/xs/sm"
          className="uppercase"
        >
          {maxRange}.00 eur
        </Text>
      </div>

      <RangeInput
        range={range}
        minRange={minRange}
        maxRange={maxRange}
        onChange={handleRange}
      />
    </div>
  );
};

export default memo(PriceRange);
