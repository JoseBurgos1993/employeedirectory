import React from "react";
import "./style.css";

    //<span className="filterBtn" onClick={props.onClick} role="button" tabIndex="0"></span>
function Filter(props) {
  let foo = "";
  if(props.type === "Male"){
    foo = "btn btn-primary";
  } else{
    foo = "btn btn-success";
  }
  
  return (
    <button type="button" className={foo} onClick={props.onClick}>Filter By {props.type}</button>
  );
}

export default Filter;
