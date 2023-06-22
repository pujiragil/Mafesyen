export function CatalogSidebar() {
  return (
    <div className="mb-4 h-full space-y-8 border-[#C4C4C4] lg:col-span-1 lg:mb-0 lg:block lg:border-r">
      <h3 className="text-2xl font-normal">Shop Some Wear:</h3>
      <div className="hidden space-y-5 lg:block">
        <CheckboxItem>best sellers</CheckboxItem>
        <CheckboxItem>new arivals</CheckboxItem>
        <CheckboxItem>collection: summer</CheckboxItem>
        <CheckboxItem>collection: spring</CheckboxItem>
        <CheckboxItem>trending</CheckboxItem>
      </div>
    </div>
  );
}

function CheckboxItem({ children }) {
  return (
    <label className="flex items-center gap-x-2 font-roboto text-sm uppercase text-[#3F3F3F]">
      <input type="checkbox" className="peer" />
      <p className="peer-checked:text-black">{children}</p>
    </label>
  );
}
