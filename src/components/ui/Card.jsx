// src/components/ui/Card.jsx
import React from "react";

const Card = ({ children, className = "" }) => {
  return (
    <div className={`rounded-xl border border-gray-700 shadow-md ${className}`}>
      {children}
    </div>
  );
};

export default Card;
