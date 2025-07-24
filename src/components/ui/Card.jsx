import React from "react";

export const Card = ({ children, className }) => {
  return (
    <div
      className={`bg-white shadow-md rounded-lg border border-gray-200 p-6 ${className}`}
    >
      {children}
    </div>
  );
};

export const CardContent = ({ children, className }) => {
  return <div className={`mt-2 ${className}`}>{children}</div>;
};
