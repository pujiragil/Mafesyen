const ProductTag = ({ children }) => {
  return (
    <p className="w-fit bg-[#F0F1F2] px-2 py-1 font-oswald text-sm font-medium uppercase text-[#3F3F3F] lg:text-base lg:px-3">
      {children}
    </p>
  );
};

export default ProductTag;
