export default function Filter() {
  return (
    <div className="mx-3.5 mb-3">
      <div className="relative border border-black bg-black text-white">
        <button className="text-xs p-3 w-full text-left">FILTER</button>
        <img className="absolute top-1/2 right-3" src="/arrow-up-white.svg" alt="arrow-down" />
      </div>

      {/* filter list */}
      <div className="p-3 flex flex-col gap-3 border border-black">
        {/* brand menu */}
        <div className="flex flex-col gap-3 pb-4 border-b border-[#F0F2F2]">
          <div className="flex justify-between items-center">
            <p className="text-xs">Brand</p>
            <img src="/min-dark.svg" alt="min-dark" />
          </div>

          {/* brand checkbox wrapper */}
          <div className="space-y-1.5 text-[10px] text-[#3F3F3F]">
              <label className="flex items-center gap-2 cursor-pointer w-fit">
                <input className="w-3" type="checkbox" />
                STATE
              </label>
              <label className="flex items-center gap-2 cursor-pointer w-fit">
                <input className="w-3" type="checkbox" />
                BARDOT
              </label>
              <label className="flex items-center gap-2 cursor-pointer w-fit">
                <input className="w-3" type="checkbox" />
                ALFANI
              </label>
              <label className="flex items-center gap-2 cursor-pointer w-fit">
                <input className="w-3" type="checkbox" />
                CECE
              </label>
              <label className="flex items-center gap-2 cursor-pointer w-fit">
                <input className="w-3" type="checkbox" />
                DONNA RICCO
              </label>
          </div>
        </div>
      </div>
    </div>
  )
}