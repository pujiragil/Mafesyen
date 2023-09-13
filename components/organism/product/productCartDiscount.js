const ProductCartDiscount = () => {
  return (
    <div className="space-y-3.5">
      <div className="space-y-4">
        <p className="font-oswald font-medium text-[#828282] md:text-lg">
          Apply Discount Code
        </p>

        <div className="flex h-10 items-center gap-4 border border-[#C4C4C4] p-1 pl-4 focus-within:ring-1 focus-within:ring-[#C4C4C4] md:h-12">
          <input
            className="h-full w-full font-roboto text-xs font-normal text-[#828282] outline-none placeholder:text-[#C4C4C4] placeholder:opacity-100 focus:outline-none md:text-sm"
            placeholder="Enter discount code"
          />
          <button className="h-full w-24 border-2 border-[#C4C4C4] bg-[#f0f1f2] font-oswald text-xs font-medium uppercase text-[#828282] md:w-28 md:text-sm">
            apply
          </button>
        </div>
      </div>

      <div className="space-y-2.5">
        <p className="font-oswald font-medium text-[#828282] md:text-lg">
          Total Estimate
        </p>

        <div>
          <div className="space-y-4 border-2 border-b-0 border-[#C4C4C4] bg-[#f0f1f2] p-3.5">
            <div className="space-y-2 border-b border-[#C4C4C4] pb-4">
              <p className="font-oswald text-sm font-medium text-black md:text-base">
                Order summary
              </p>

              <div className="space-y-1">
                <div className="flex justify-between font-oswald text-xs font-medium text-[#828282] md:text-sm">
                  <p>Price Total (4 items)</p>
                  <p>IDR 1.000.000</p>
                </div>
                <div className="flex justify-between font-oswald text-xs font-medium text-[#828282] md:text-sm">
                  <p>Order total discount</p>
                  <p>-IDR 100.000</p>
                </div>
              </div>
            </div>

            <div className="flex justify-between font-oswald text-sm font-medium text-black md:text-base">
              <p>Order Total</p>
              <p>IDR 900.000</p>
            </div>
          </div>
          <button className="h-10 w-full bg-black text-center font-oswald text-xs font-medium uppercase text-white transition-colors duration-200 hover:bg-[#eb5757] md:h-12 md:text-sm">
            proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCartDiscount;
