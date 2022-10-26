export function CatalogSidebar() {
  return (
    <div className="h-full space-y-8 border-r border-[#C4C4C4]">
      <h3 className="text-2xl font-normal">Shop Some Wear:</h3>
      <div className="space-y-5">
        <div className="flex items-center gap-x-2">
          <input type={"checkbox"} />
          <label className="font-roboto text-sm text-[#3F3F3F] uppercase">best sellers</label>
        </div>
        <div className="flex items-center gap-x-2">
          <input type={"checkbox"} />
          <label className="font-roboto text-sm text-[#3F3F3F] uppercase">new arivals</label>
        </div>
        <div className="flex items-center gap-x-2">
          <input type={"checkbox"} />
          <label className="font-roboto text-sm text-[#3F3F3F] uppercase">top woman</label>
        </div>
        <div className="flex items-center gap-x-2">
          <input type={"checkbox"} />
          <label className="font-roboto text-sm text-[#3F3F3F] uppercase">collection: summer</label>
        </div>
        <div className="flex items-center gap-x-2">
          <input type={"checkbox"} />
          <label className="font-roboto text-sm text-[#3F3F3F] uppercase">collection: spring</label>
        </div>
        <div className="flex items-center gap-x-2">
          <input type={"checkbox"} />
          <label className="font-roboto text-sm text-[#3F3F3F] uppercase">trending</label>
        </div>
      </div>
    </div>
  )
}