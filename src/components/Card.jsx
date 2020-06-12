import React from "react";

const Card = (props) => {
  return (
    <div
      className="main-bg"
      style={{ display: "flex", float: "left", flexWrap: "wrap" }}
    >
      {props.products.map((p) => (
        <div
          className="float-left App"
          style={{ maxWidth: "25%", padding: "30px" }}
        >
          <img className="card-img-top" src={p.imgURL} alt={p.prod} />
          <div
            className="card-body"
            style={{ background: "rgba(255, 255, 255, 0.5)" }}
          >
            <h5 className="card-title">
              <em>{p.prod}</em>{" "}
            </h5>
            <div className="card-text">
              <p style={{ fontSize: "1.4em" }}>${p.price}</p>
              <ul
                style={{
                  listStyle: "none",
                  margin: "0",
                  padding: "0",
                }}
              >
                <li className="list-item">Genre: {p.category}</li>
                <li className="list-item">Manufacturer: {p.manufacturer}</li>
                <li className="list-item">Quantity: {p.quantity}</li>
              </ul>
            </div>
            <button
              onClick={() =>
                p.quantity > 0
                  ? props.handleAddCart(p.serial)
                  : alert("Error: Out of stock!")
              }
              className="btn btn-primary"
            >
              Add To Cart
            </button>
          </div>
          <div
            className="card-footer"
            style={{ background: "rgba(0, 0, 0, 0.7)", color: "white" }}
          >
            <small className="text-muted">Serial No. {p.serial}</small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
