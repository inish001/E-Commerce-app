import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { addProduct, delProduct } from "../redux/action";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  // console.log(state)
  const dispatch = useDispatch();

  const handleProductAdd = (cartItem) => {
    console.log("add", cartItem);
    dispatch(addProduct(cartItem));
  };

  const handleProductDelete = (cartItem) => {
    console.log("delete", cartItem);
    dispatch(delProduct(cartItem));
  };

  const cartItems = (cartItem) => {
    return (
        <>
      <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
        <div className="container py-4">
          <div className="row">
            <div className="col-md-4">
              <img
                src={cartItem.image}
                alt={cartItem.title}
                height="200px"
                width="180px"
              />
            </div>
            <div className="col-md-4">
              <h3>{cartItem.title}</h3>
              <p className="lead fw-bold">
                {cartItem.qty} X {cartItem.price} = $
                {cartItem.qty * cartItem.price}
              </p>
              <button
                className="btn btn-outline-dark me-4"
                onClick={() => handleProductDelete(cartItem)}
              >
                <i className="fa fa-minus"></i>
              </button>
              <button
                className="btn btn-outline-dark"
                onClick={() => handleProductAdd(cartItem)}
              >
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
     
      </>
    );
  };
  return <>
  {state.length !== 0 && state.map(cartItems)}
  <NavLink to="/login" className="btn btn-outline-dark mx-4">Proceed To CheckOut</NavLink>
  </>;
};

export default Cart;
