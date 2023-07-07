export const FooterDropdownOpen = ({ className, ...props }) => (
  <svg
    className={className}
    {...props}
    width="19"
    height="18"
    viewBox="0 0 19 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.5 0V9V18" stroke="#3F3F3F" stroke-width="1.4" />
    <path d="M19 9L9.5 9L-4.76837e-07 9" stroke="#3F3F3F" stroke-width="1.4" />
  </svg>
);

export const FooterDropdownClose = ({ className, ...props }) => (
  <svg
    className={className}
    {...props}
    width="19"
    height="2"
    viewBox="0 0 19 2"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 1L9.5 1L-4.76837e-07 0.999999"
      stroke="white"
      stroke-width="1.4"
    />
  </svg>
);
