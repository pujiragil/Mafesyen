const CartInformation = ({ title, color, size, price }) => {
  return (
    <div className="space-y-1">
      <p className="font-oswald text-lg font-normal text-black md:text-xl">
        {title}
      </p>
      <p className="font-roboto text-xs text-[#C4C4C4] md:text-sm">
        {color}, {size}
      </p>
      <p className="font-oswald text-sm font-normal uppercase text-black md:text-base">
        IDR {price}
      </p>
    </div>
  );
};

export default CartInformation;
