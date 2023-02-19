import React from "react";

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (
  {
    style,...props
  }
) => {
  return (
    <button
      {...props}
      style={{
        height: "2rem",
        borderRadius: "0.5rem",
        border: "none",
        padding: "0.5rem 1.5rem",
        fontSize: "1rem",
        outline: "none",
        boxShadow: "0 0 0 1px rgba(0,0,0,0.1)",
        cursor: "pointer",
        ...style,
      }}
    />
  );
};

export default Button;
