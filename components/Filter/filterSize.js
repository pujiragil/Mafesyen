import { useState } from "react";

export default function FilterSize() {
  const [isShow, setIsShow] = useState(false)

  const handleShow = () => setIsShow(prev => !prev)

  return (
    <div className="flex flex-col gap-3 pb-4 border-b border-[#F0F2F2] font-oswald">
      <div
        onClick={handleShow}
        className="flex justify-between items-center cursor-pointer"
      >
        <p className="text-xs font-oswald">Size (Inches)</p>
        <img src="/min-dark.svg" alt="min-dark" />
      </div>
      {isShow ? <ButtonSizes /> : null}
    </div>
  )
}

function ButtonSizes() {
  const buttonSizes = ["osfa", "w26", "w27", "w28", "w29", "w30", "w31", "w32", "w33", "w34", "w35", "w36", "w37", "w38", "w39", "w40", "w41", "w42", "w43", "w44"]

  return (
    <div className="w-fit grid grid-cols-5 gap-2 text-xs text-[#828282]">
      {buttonSizes.map(button => (
        <button key={button} className="w-[38px] h-[38px] flex justify-center items-center border border-[#E5E7EB] outline-none">{button}</button>
      ))}
    </div>
  )
}