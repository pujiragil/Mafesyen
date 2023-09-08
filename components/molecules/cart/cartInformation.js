import { createContext, useContext } from "react";

const CartInformationContext = createContext(null);

const useCartInformationContext = () => useContext(CartInformationContext);

const CartInformation = ({ title, type, price, data }) => {
  return (
    <CartInformationContext.Provider value={data}>
      <div className="space-y-1">
        {title}
        {type}
        {price}
      </div>
    </CartInformationContext.Provider>
  );
};

const Title = () => {
  const data = useCartInformationContext();

  return (
    <p className="font-oswald text-lg font-normal text-black md:text-xl">
      {data.title}
    </p>
  );
};

const Type = () => {
  const data = useCartInformationContext();

  return (
    <p className="font-roboto text-xs text-[#C4C4C4] md:text-sm">
      {data.color}, {data.size}
    </p>
  );
};

const Price = () => {
  const data = useCartInformationContext();

  return (
    <p className="font-oswald text-sm font-normal uppercase text-black md:text-base">
      IDR {data.price}
    </p>
  );
};

CartInformation.Title = Title;
CartInformation.Type = Type;
CartInformation.Price = Price;

export default CartInformation;
