import React from "react";
import "./Cosmetic.css";
const Cosmetic = (props) => {
  const { name, price, id } = props.cosmetic;
  const addToCart = (id) =>{
console.log(id);
  }
  const addToCartWithParam = () => addToCart(id);
  return (
    <div className="product shadow rounded ">
      <h2>Buy this: {name}</h2>
      <h5>Only for: $ {price}</h5>
      <p className="fw-bold">
        <small>It has id: {id}</small>
      </p>
      <button onClick={addToCartWithParam} className="btn btn-outline-warning">Add to Cart</button>
      <button onClick={ () => addToCart(id)} className="btn btn-outline-success my-3 mx-2">Add to Cart ShortCurt</button>
    </div>
  );
};

export default Cosmetic;
