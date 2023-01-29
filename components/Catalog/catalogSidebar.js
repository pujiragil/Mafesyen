export function CatalogSidebar() {
  return (
    <div className="h-full space-y-8 border-r border-[#C4C4C4]">
      <h3 className="text-2xl font-normal">Shop Some Wear:</h3>
      <div className="space-y-5">
        <CheckboxItem>best sellers</CheckboxItem>
        <CheckboxItem>new arivals</CheckboxItem>
        <CheckboxItem>collection: summer</CheckboxItem>
        <CheckboxItem>collection: spring</CheckboxItem>
        <CheckboxItem>trending</CheckboxItem>
      </div>
    </div>
  )
}

function CheckboxItem({ children }) {
  return (
    <label className="flex items-center gap-x-2 font-roboto text-sm text-[#3F3F3F] uppercase">
      <input type="checkbox" className="peer" />
      <p className="peer-checked:text-black">{children}</p>
    </label>
  )
}