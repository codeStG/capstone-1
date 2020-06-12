import React from "react";

function Total(props) {
  const handleClick = () => {
    alert("Items purchased!");
  };

  return (
    <div>
      <header className="sticky">
        Total: {props.cartTotal.toFixed(2)}
        <button
          className="btn-secondary btn-sm btn-success float-right"
          style={{ border: "none", marginTop: "-2.5px" }}
          onClick={handleClick}
        >
          Checkout
        </button>
      </header>
    </div>
  );
}

export default Total;
