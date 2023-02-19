import React from "react";

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (
  {
    style,
    ...props
  }
) => {
  return (
    <input
      style={{
        width: "100%",
        height: "2rem",
        borderRadius: "0.5rem",
        border: "none",
        padding: "0.5rem",
        fontSize: "1rem",
        outline: "none",
        boxShadow: "0 0 0 1px rgba(0,0,0,0.1)",
        ...style,
      }}
      {...props}
    />
  );
};

export default Input;
