import React from "react";
import "./Cosmetic.css"
const Cosmetic = (props) => {
  const { name, price, id } = props.cosmetic;
  return (
    <div className="product">
      <h2>Buy this: {name}</h2>
      <h5>Only for: $ {price}</h5>
      <p>
        <small>It has id: {id}</small>
      </p>
    </div>
  );
};

export default Cosmetic;
