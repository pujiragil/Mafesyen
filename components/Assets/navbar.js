export const HamburgerIcon = ({ onClick, className }) => {
  return (
    <svg
      onClick={onClick}
      className={className}
      width="20"
      height="15"
      viewBox="0 0 20 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="20" height="3" fill="white" />
      <rect y="6" width="20" height="3" fill="white" />
      <rect y="12" width="20" height="3" fill="white" />
    </svg>
  );
};

export const SearchIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="7.30769"
        cy="7.30769"
        r="6.10769"
        stroke="white"
        strokeWidth="2.4"
      />
      <path
        d="M13.6406 13.6409L18.9996 18.9998"
        stroke="white"
        strokeWidth="2.4"
      />
    </svg>
  );
};

export const CartIcon = ({ className }) => (
  <svg
    className={className}
    width="18"
    height="22"
    viewBox="0 0 18 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.26297 6.59995L2.54533 18.8H15.4547L14.737 6.59995H3.26297ZM17 4.19995H1L0 21.2H18L17 4.19995Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.20078 2.4V4.2H3.80078V2.2C3.80078 0.984973 4.78576 0 6.00078 0H12.0008C13.2158 0 14.2008 0.984974 14.2008 2.2V4.2H11.8008V2.4H6.20078Z"
      fill="white"
    />
  </svg>
);
