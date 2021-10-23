import React from "react";
import "../LeftpaneWidgets.css";

function LeftpaneWidgets({ active, text, Icon }) {
  return (
    <div className={`LeftpaneWidgets ${active && "LeftpaneWidgets--active"}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default LeftpaneWidgets;
