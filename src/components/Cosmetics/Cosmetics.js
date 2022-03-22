import React from "react";
import add from "../../utilities/add";
import { division, multiply } from "../../utilities/calculate";

const Cosmetics = () => {
  const first = 55;
  const second = 12;
  const summetion = add(first, second);
  const divide = division(first, second);
  const multiplication = multiply(first, second);
  return (
    <div>
      <h1>This is BK</h1>
      <h3>Addition: {summetion}</h3>
      <h3>Division: {divide}</h3>
      <h3>Multiplication: {multiplication}</h3>
    </div>
  );
};

export default Cosmetics;
