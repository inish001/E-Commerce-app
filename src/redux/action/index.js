export const addProduct = (product) => {
  console.log("action")
  return {
    type: "ADDPRODUCT",
    payload: product,
  };
};

export const delProduct = (product) => {
  return {
    type: "DELETEPRODUCT",
    payload: product,
  };
};
