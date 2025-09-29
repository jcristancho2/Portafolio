// src/components/ui/Card.jsx
import React from "react";

const Card = ({ children, className = "" }) => {
  return (
    <div className={`rounded-xl border border-gray-300 dark:border-gray-700 shadow-md transition-colors duration-300 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
