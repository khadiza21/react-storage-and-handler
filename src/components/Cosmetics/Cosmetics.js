import React, { useEffect, useState } from "react";
import add from "../../utilities/add";
import { division, getTotal, multiply } from "../../utilities/calculate";
import Cosmetic from "../Cosmetic/Cosmetic";
import "./Cosmetics.css";

const Cosmetics = () => {
  const first = 55;
  const second = 12;
  const summetion = add(first, second);
  const divide = division(first, second);
  const multiplication = multiply(first, second);
  // const cosmeticsO = [
  //   { id: 1, name: "Alta", price: 100 },
  //   { id: 2, name: "Alita", price: 200 },
  //   { id: 3, name: "Blta", price: 300 },
  //   { id: 4, name: "Palta", price: 500 },
  //   { id: 5, name: "Calta", price: 400 },
  // ];

  const [cosmeticsOP, setCosmetics] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCosmetics(data));
  }, []);

  const totalo = getTotal(cosmeticsOP);
  return (
    <div>
      <h1>This is BK</h1>
      <h3>Addition: {summetion}</h3>
      <h3>Division: {divide}</h3>
      <h3>Multiplication: {multiplication}</h3>
      <h2>Total Money : {totalo}</h2>
      <div className="products container my-5">
        {cosmeticsOP.map((cosmetic) => (
          <Cosmetic key={cosmetic.id} cosmetic={cosmetic}></Cosmetic>
        ))}
      </div>
    </div>
  );
};

export default Cosmetics;
