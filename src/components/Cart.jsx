import React from "react";
import Total from "./Total";

function Cart(props) {
  return (
    <div>
      <Total cartTotal={props.cartTotal} />
      {props.cartItems.map((p) => (
        <div>
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
                  <li className="list-item"></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
