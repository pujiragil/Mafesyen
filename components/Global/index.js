import { cva } from "class-variance-authority";

export function Button({ children, mainButton }) {
  return (
    <button
      className={`w-fit ${
        mainButton
          ? "py-2.5 px-7 text-sm font-medium"
          : "py-2 px-4 text-[10px] font-semibold md:font-medium"
      } border-2 border-black uppercase md:text-sm lg:text-base`}
    >
      {children}
    </button>
  );
}

export function DetailButton() {
  return (
    <div className="w-full justify-center font-oswald md:flex">
      <button className="flex h-9 w-full items-center justify-center border-2 border-[#C4C4C4] text-xs font-medium uppercase text-[#3F3F3F] md:w-32">
        load more
      </button>
    </div>
  );
}

export function Head() {
  return (
    <h1 className="h-fit w-fit border-2 border-white p-1 font-oswald font-semibold uppercase text-white">
      Mafesyen
    </h1>
  );
}