export default function FilterBrand() {
  return (
    <div className="flex flex-col gap-3 pb-4 border-b border-[#F0F2F2]">
      <div className="flex justify-between items-center cursor-pointer">
        <p className="text-xs font-oswald">Brand</p>
        <img src="/min-dark.svg" alt="min-dark" />
      </div>

      {/* brand checkbox wrapper */}
      <div className="space-y-1.5 text-[10px] text-[#3F3F3F] font-roboto">
        <FilterCheckboxItem>STATE</FilterCheckboxItem>
        <FilterCheckboxItem>BARDOT</FilterCheckboxItem>
        <FilterCheckboxItem>ALFANI</FilterCheckboxItem>
        <FilterCheckboxItem>CECE</FilterCheckboxItem>
        <FilterCheckboxItem>DONNA RICCO</FilterCheckboxItem>
      </div>
    </div>
  )
}

function FilterCheckboxItem({ children }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer w-fit duration-200">
      <input className="w-3 cursor-pointer peer" type="checkbox" />
      <p className="peer-checked:text-black">{children}</p>
    </label>
  )
}