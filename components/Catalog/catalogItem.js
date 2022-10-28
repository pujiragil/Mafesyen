export default function CatalogItem({ imgLink }) {
  return (
    <section className="space-y-1.5">
      <div className="w-full overflow-hidden">
        <img className="w-full h-52 md:h-64 lg:h-72 object-cover hover:scale-110 duration-200 ease-in-out cursor-pointer" src={imgLink} alt="dress" />
      </div>
      <div className="space-y-1.5">
        <p className="uppercase text-[#BDBDBD] text-[10px] md:text-xs font-semibold">top woman</p>
        <h4 className="text-xs md:text-base lg:text-lg font-light">Angels malu zip jeans slim black used</h4>
        <p className="font-medium text-sm md:text-lg lg:text-2xl">139,00 EUR</p>
      </div>
    </section>
  )
}