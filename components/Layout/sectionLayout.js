const SectionLayout = ({ children, background }) => {
  return (
    <div className={background ? background : "bg-white"}>
      <div className="container mx-auto">{children}</div>
    </div>
  );
};

export default SectionLayout;
