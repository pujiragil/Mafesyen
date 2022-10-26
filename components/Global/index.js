export function Button({ children, mainButton }) {
  return <button className={`w-fit ${mainButton ? "py-2.5 px-7 font-medium text-sm" : "py-2 px-4 text-[10px] font-semibold md:font-medium"} md:text-lg border-2 border-black uppercase`}>{children}</button>
}

export function DetailButton() {
  return (
    <div className="w-full">
      <button className="uppercase text-xs font-medium text-[#3F3F3F] h-9 w-full flex justify-center items-center border-2 border-[#C4C4C4]">see more</button>
    </div>
  )
}