import { cn } from "@/utils/utils";

const tables = ["Product", "Price", "Quantity", "Actions"];

const ProductCartTable = () => {
  return (
    <div
      className={cn(
        "pb-4",
        "gap-3",
        "hidden",
        "md:grid",
        "text-[#828282]",
        "font-oswald font-medium",
        "border-b border-[#C4C4C4]",
        "grid-cols-[3fr_1fr_58px] lg:grid-cols-[3fr_1fr_1fr_58px]"
      )}
    >
      {tables.map((table) => (
        <p
          key={table}
          className={cn(table === "Price" ? "hidden lg:block" : null)}
        >
          {table}
        </p>
      ))}
    </div>
  );
};

export default ProductCartTable;
