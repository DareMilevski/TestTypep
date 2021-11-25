import React from "react";
import "./Buton.css";

const Buton = (props) => {
  const { variant = "primary", children, ...rest } = props;
  return (
    <button class={(`buton ${variant}`, children, { ...rest })}>
      {children}
    </button>
  );
};
export default Buton;
