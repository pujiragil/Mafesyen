export default function NavSearchInput() {
  return (
    <div className="bg-white h-10 flex">
      <input
        className="outline-none h-full w-full px-6 border-none font-roboto text-xs text-black"
        type="input"
        placeholder="Type something"
      />
      <button className="text-[#828282] hover:text-black duration-200 px-8 bg-[#F0F1F2] border-2 border-[#C4C4C4] outline-none">
        FIND
      </button>
    </div>
  )
}