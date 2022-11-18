import React, { useEffect, useState } from "react";
import { Card } from "antd";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
const { Meta } = Card;

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const res = await fetch("https://fakestoreapi.com/products");
      setData(await res.clone().json());
      setFilter(await res.json());
      setLoading(false);
      console.log(filter);
      console.log(data);
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col md-3">
          <Skeleton height={350} />
        </div>
        <div className="col md-3">
          <Skeleton height={350} />
        </div>
        <div className="col md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };
  const filterProduct = (cat) => {
    const updatedList = data.filter((e) => e.category === cat);
    setFilter(updatedList);
  };
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setFilter(data)}
          >
            {" "}
            ALL
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("men's clothing")}
          >
            {" "}
            Men's
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("women's clothing")}
          >
            {" "}
            Women's
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("electronics")}
          >
            Electronics
          </button>
        </div>
        {filter &&
          filter.map((product) => (
            <>
              <div key={product.id} className="col-md-3 mb-4">
                <Card
                  className="card h-100 text-center p-4"
                  hoverable
                  style={{
                    width: "234px",
                  }}
                  cover={
                    <img
                      alt="product"
                      src={product.image}
                      className="card-img-top"
                      height="250px"
                    />
                  }
                >
                  <Meta
                    title={product.title.substring(0, 12)}
                    description={`$${product.price}`}
                  />
                  <NavLink
                    to={`/products/${product.id}`}
                    className="btn btn-outline-dark"
                  >
                    Buy Now{" "}
                  </NavLink>
                </Card>
              </div>
            </>
          ))}
      </>
    );
  };
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
