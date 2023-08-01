const ProductLabel = ({ children }) => {
  return (
    <p className="font-oswald text-xs font-normal uppercase text-[#3F3F3F] md:text-sm">
      {children}
    </p>
  );
};

export default ProductLabel;
