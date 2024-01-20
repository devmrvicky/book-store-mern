import React from "react";

const Container = ({ children, maxWidth = "max-w-3xl", className = "" }) => {
  return (
    <div className={`${maxWidth} mx-auto p-2 ${className}`}>{children}</div>
  );
};

export default Container;
