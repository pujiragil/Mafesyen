export const HamburgerIcon = ({ onClick }) => {
  return (
    <svg
      onClick={onClick}
      className="cursor-pointer"
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

export const SearchIcon = () => {
  return (
    <svg
      className="cursor-pointer"
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
