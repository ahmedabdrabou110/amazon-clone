import React from "react";

const HeaderOption = ({ option_one, option_two }) => {
  return (
    <div className="header-option">
      <div className="header-option__line_one">{option_one}</div>
      <div className="header-option__line_two">{option_two}</div>
    </div>
  );
};

export default HeaderOption;
