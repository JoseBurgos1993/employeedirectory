import React from "react";
import "./style.css";

function Generate(props) {
  return (
    <span className="generateBtn" {...props} role="button" tabIndex="0">
      Generate
    </span>
  );
}

export default Generate;
