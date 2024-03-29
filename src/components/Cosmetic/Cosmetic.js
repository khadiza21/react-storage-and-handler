import React from "react";
import { addToDb, removeFromDb } from "../../utilities/fakedb";
import "./Cosmetic.css";
const Cosmetic = (props) => {
  const { name, price, id } = props.cosmetic;
  const addToCart = (id) => {
    // console.log(id);
    // localStorage.setItem(id, 1);
    addToDb(id);
  };

  const removeFromCart = (id) => {
    removeFromDb(id);
  };
  //const addToCartWithParam = () => addToCart(id);
  return (
    <div className="product shadow rounded ">
      <h2>Buy this: {name}</h2>
      <h5>Only for: $ {price}</h5>
      <p className="fw-bold">
        <small>It has id: {id}</small>
      </p>
      {/* <button onClick={addToCartWithParam} className="btn btn-outline-warning">Add to Cart</button> */}
      {/* ShortCurt */}
      <button
        onClick={() => addToCart(id)}
        className="btn btn-outline-warning fw-bold"
      >
        Add to Cart{" "}
      </button>

      <button
        onClick={() => removeFromCart(id)}
        className="btn btn-outline-danger fw-bold mx-2"
      >
        Remove Cart
      </button>
    </div>
  );
};

export default Cosmetic;
