import React from "react";

const Cosmetic = (props) => {
  const { name, price } = props.cosmetic;
  return (
    <div>
      <h2>Buy this: {name}</h2>
      <h5>Only for: $ {price}</h5>
    </div>
  );
};

export default Cosmetic;
