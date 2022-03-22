const division = (num1, num2) => {
  return num1 / num2;
};
const multiply = (num1, num2) => {
  return num1 * num2;
};

// array reduce
// const numbers = [23, 34, 232, 53, 54];
// const sumReducer = (previous, current) => previous + current;
// const total = numbers.reduce(sumReducer, 0);

//object reducer
// const items = [
//   { id: 1, name: "Alta", price: 100 },
//   { id: 2, name: "Alita", price: 200 },
//   { id: 3, name: "Blta", price: 300 },
//   { id: 4, name: "Palta", price: 500 },
//   { id: 5, name: "Calta", price: 400 },
// ];
// const itemSumReducer = (previous, current) => previous + current.price;
// const itemTotal = items.reduce(itemSumReducer, 0);

const getTotalPrice = (products) => {
  const reducer = (previous, current) => previous + current.price;
  const total = products.reduce(reducer, 0);
  return total;
};

export { division, multiply, getTotalPrice as getTotal };
