// use local storage to manage cart data
const addToDb = (id) => {
  const itemCount = localStorage.getItem(id);
  if (itemCount == null) {
    localStorage.setItem(id, 1);
  } else {
    const totalItem = parseInt(itemCount);
    localStorage.setItem(id, totalItem + 1);
  }
};
export { addToDb };
