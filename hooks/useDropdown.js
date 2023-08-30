import { useState, useCallback } from "react";

const useDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = useCallback(() => setIsOpen((prevOpen) => !prevOpen), []);

  return [isOpen, handleOpen];
};

export default useDropdown;
