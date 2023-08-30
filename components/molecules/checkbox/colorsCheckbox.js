import { ColorCheckbox } from "@/components/atoms";

const ColorsCheckbox = ({ data }) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_40px)] gap-2 sm:gap-4 lg:gap-2">
      {data.map((color) => (
        <ColorCheckbox key={color} color={color} />
      ))}
    </div>
  );
};

export default ColorsCheckbox;
