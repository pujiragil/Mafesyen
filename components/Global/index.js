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

export function Head() {
  return (
    <h1 className="h-fit w-fit border-2 border-white p-1 font-oswald font-semibold uppercase text-white">
      Mafesyen
    </h1>
  );
}