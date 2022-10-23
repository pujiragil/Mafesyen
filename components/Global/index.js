export function Button({ children, mainButton }) {
  return <button className={`w-fit ${mainButton ? "py-2.5 px-7 font-medium md:text-xl" : "py-2 px-4 font-semibold"} text-sm border-2 border-black uppercase`}>{children}</button>
}