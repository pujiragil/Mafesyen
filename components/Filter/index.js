import { useState } from "react";
import FilterBrand from "./filterBrand";
import FilterColor from "./filterColor";
import FilterSize from "./filterSize";

export default function Filter() {
  const [showFilter, setShowFilter] = useState(false)

  const handleShowFilter = () => setShowFilter(prev => !prev)

  return (
    <div className="mx-3.5 mb-3">
      <div className="relative border border-black bg-black text-white font-oswald">
        <button onClick={handleShowFilter} className="text-xs p-3 w-full text-left">FILTER</button>
        <img className="absolute top-1/2 right-3" src="/arrow-up-white.svg" alt="arrow-down" />
      </div>

      {/* filter list */}
      {showFilter ?
        (
          <div className="p-3 flex flex-col gap-3 border border-black">
            {/* brand menu */}
            <FilterBrand />
            {/* size menu */}
            <FilterSize />
            {/* color menu */}
            <FilterColor />
          </div>

        ) : null}
    </div>
  )
}