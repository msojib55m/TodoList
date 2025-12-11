import React from "react";
import type { GlobalButton } from "../type";



const GlobalButton: React.FC<GlobalButton> = ({
  title,
  onClick,
  type = "button",
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 ${className}`}
    >
      {title}
    </button>
  );
};

export default GlobalButton;
