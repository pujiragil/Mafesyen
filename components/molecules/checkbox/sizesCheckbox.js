import { SizeCheckbox } from "@/components/atoms";

const SizesCheckbox = ({ data }) => {
  return (
    <div className="grid grid-cols-6 place-items-center gap-2">
      {data.map((size) => (
        <SizeCheckbox key={size}>{size}</SizeCheckbox>
      ))}
    </div>
  );
};

export default SizesCheckbox;
