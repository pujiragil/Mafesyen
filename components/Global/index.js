export function Button({ children, mainButton }) {
  return (
    <button
      className={`w-fit ${
        mainButton
          ? "py-2.5 px-7 font-medium text-sm"
          : "py-2 px-4 text-[10px] font-semibold md:font-medium"
      } md:text-sm lg:text-base border-2 border-black uppercase`}
    >
      {children}
    </button>
  );
}

export function DetailButton() {
  return (
    <div className="font-oswald w-full md:flex justify-center">
      <button className="uppercase text-xs font-medium text-[#3F3F3F] h-9 w-full md:w-32 flex justify-center items-center border-2 border-[#C4C4C4]">
        load more
      </button>
    </div>
  );
}

export function Head() {
  return (
    <h1 className="font-oswald text-white uppercase p-1 border-2 border-white w-fit h-fit font-semibold">
      Mafesyen
    </h1>
  );
}

const SIZES_VARIANT = {
  base: "text-[10px] md:text-xs",
  lg: "text-[10px] md:text-base",
};

export function Highlight({ text, sizes = "base" }) {
  const className = `${SIZES_VARIANT[sizes]} text-[#BDBDBD] font-oswald font-semibold`;
  return <p className={className}>{text}</p>;
}
