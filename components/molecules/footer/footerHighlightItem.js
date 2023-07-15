const FooterHighlightItem = ({ children }) => {
  return (
    <div className="flex items-center gap-3.5">
      <svg
        className="h-8 w-8"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8 14.6L13.25 20L22 11" stroke="black" stroke-width="2" />
      </svg>
      <p className="font-oswald text-sm text-black lg:text-base">{children}</p>
    </div>
  );
};

export default FooterHighlightItem;
