import { SizeCheckbox } from "@/components/atoms";

const SizesCheckbox = ({ data }) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_40px)] gap-2 sm:gap-4 lg:gap-2">
      {data.map((size) => (
        <SizeCheckbox key={size}>{size}</SizeCheckbox>
      ))}
    </div>
  );
};

export default SizesCheckbox;
