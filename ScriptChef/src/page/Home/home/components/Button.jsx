import React from "react";

const Button = ({ style_home_pages }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${style_home_pages}`}>
    Get Started
  </button>
);

export default Button;
