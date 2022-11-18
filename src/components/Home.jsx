import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="background-image">
      <div className="card text-bg-dark text-white border-0">
        <div className="img-container">
        <img
          src="https://img.freepik.com/free-photo/beautiful-smart-asian-young-entrepreneur-business-woman-owner-sme-checking-product-stock-scan-qr-code-working-home_7861-1369.jpg?w=2000"
          className="card-img"
          alt="background"
        //   height="350px"
        />
        </div>
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              New Arrivals
            </h5>
            <p className="card-text lead fs-2">Check Out All New Trends !</p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
