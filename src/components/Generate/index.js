import React from "react";
import "./style.css";

function Generate(props) {
  return (
    <button type="button" className="btn btn-danger" {...props}>Generate</button>
  );
}

export default Generate;
