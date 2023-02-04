import { useState } from "react";

export default function FilterColor() {
  const [isShow, setIsShow] = useState(true);

  const handleShow = () => setIsShow((prev) => !prev);

  return (
    <div className="flex flex-col gap-3 pb-4 border-b border-[#F0F2F2] font-oswald">
      <div
        onClick={handleShow}
        className="flex justify-between items-center cursor-pointer"
      >
        <p className="text-xs font-oswald">Color</p>
        <img src="/min-dark.svg" alt="min-dark" />
      </div>

      {/* Button Colors */}
      {isShow ? <ButtonColors /> : null}
    </div>
  )
}

function ButtonColors() {
  const buttonColors = ["bg-[#292A2D]", "bg-[#F3ECE2]", "bg-[#24426A]", "bg-[#18574A]", "bg-[#666689]", "bg-[#C2BEB6]", "bg-[#AAABA7]", "bg-[#971E34]", "bg-[#CBA13E]", "bg-[#73513C]", "bg-[#DAB1B1]", "bg-[#2B9FA7]"]

  return (
    <div className="w-10/12 grid grid-cols-7 gap-5">
      {buttonColors.map(button => (
        <button key={button} className={`w-6 h-6 p-1 focus:ring-1 focus:ring-black outline-none`}>
          <span className={`h-full w-full block ${button}`}></span>
        </button>
      ))}
    </div>
  )
}