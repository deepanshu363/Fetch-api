import React from "react";
import "./index.scss";

const Displaycard = (props) => {
  console.log(props.data);
  return (
    <div id="display-card">
      <span>Selected Category : {props.category}</span>
      <div className="display-content">{props.data}</div>
    </div>
  );
};

export default Displaycard;
