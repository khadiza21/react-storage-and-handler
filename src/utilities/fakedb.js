// use local storage to manage cart data
const addToDb = (id) => {
  // this code for only id
  //   const itemCount = localStorage.getItem(id);
  //   if (itemCount == null) {
  //     localStorage.setItem(id, 1);
  //   } else {
  //     const totalItem = parseInt(itemCount);
  //     localStorage.setItem(id, totalItem + 1);
  //   }

  // this code is for only object
  let shoppingCart;

  //get the shopping cart
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  } else {
    shoppingCart = {};
  }

  //add quantity
  const quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }

  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};
export { addToDb };
