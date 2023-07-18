import { ColorCheckbox } from "@/components/atoms";

const ColorsCheckbox = ({ data }) => {
  return (
    <div className="grid grid-cols-6 place-items-center gap-2 md:w-fit md:gap-4 lg:w-full lg:grid-cols-5 lg:gap-2">
      {data.map((color) => (
        <ColorCheckbox key={color} color={color} />
      ))}
    </div>
  );
};

export default ColorsCheckbox;
