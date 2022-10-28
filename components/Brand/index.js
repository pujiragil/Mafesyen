import { brands } from "../../utils/brand"

export default function Brand() {
  return (
    <div className="my-3.5 lg:my-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3.5 mx-3.5 lg:p-4 lg:border-2 border-[#C4C4C4] relative">
      <h1 className="hidden lg:inline-block absolute -top-4 text-center right-[40%] bg-white w-1/5 uppercase text-xl font-normal">chose your brand</h1>
      {brands?.map((brand, index) => (
        <div key={index} className="w-full border-2 border-[#C4C4C4] lg:border-none">
          <img className="w-full h-14 md:h-20 object-cover lg:h-auto" key={index} src={brand} />
        </div>
      ))}
    </div>
  )
}