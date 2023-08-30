const RangeInput = (props) => {
  const rangeWidth = (props.range / props.maxRange) * 100 + "%";

  return (
    <div className="flex h-5 items-center overflow-hidden">
      <div className="relative block h-0.5 w-full bg-gray-400 before:absolute before:left-0 before:-top-[9.5px] before:z-0 before:h-5 before:w-1.5 before:bg-black">
        <input
          type="range"
          min={props.minRange}
          max={props.maxRange}
          defaultValue={props.range}
          onChange={props.onChange}
          className="absolute left-0 z-10 h-full w-full appearance-none bg-transparent"
        />
        <div
          style={{
            width: rangeWidth,
          }}
          className="absolute left-0 h-full bg-black"
        ></div>
      </div>
    </div>
  );
};

export default RangeInput;
