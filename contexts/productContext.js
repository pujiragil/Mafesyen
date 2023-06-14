import { createContext, useContext } from "react";

const ProductCardContext = createContext(null);

function useProductCardContext() {
  const context = useContext(ProductCardContext);
  if (!context) {
    throw Error(
      "ProductCard.* component must be rendered as a child of ProductCard component"
    );
  }

  return context;
}

export { ProductCardContext, useProductCardContext };
