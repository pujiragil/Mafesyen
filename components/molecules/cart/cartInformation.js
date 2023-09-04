const CartInformation = ({ title, color, size, price }) => {
  return (
    <div className="space-y-1">
      <p className="font-oswald text-base font-normal text-black">{title}</p>
      <p className="font-roboto text-xs text-[#C4C4C4]">
        {color}, {size}
      </p>
      <p className="font-oswald text-sm font-normal uppercase text-black">
        IDR {price}
      </p>
    </div>
  );
};

export default CartInformation;
