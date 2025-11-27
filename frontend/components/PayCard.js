import React from "react";
import "./Subscription.css";

function PayCard({ planName, price, details, button, onCheckout }) {
  const amountNumber = Number(price); // ensure number for Razorpay

  return (
    <div className="cardb02">
      <div className="plan-infob02">
        <div className="plan-detailsb02">
          <h4 className="plan-nameb02" style={{ fontSize: "2.5rem" }}>
            {planName}
          </h4>
          <h4 className="plan-Priceb02" style={{ fontSize: "4rem" }}>
            ₹{price}
          </h4>
        </div>

        <div className="descriptionb02" style={{ fontSize: "1.7rem" }}>
          <p>{details}</p>
        </div>
      </div>

      <button
        className="btnb02"
        onClick={() => onCheckout({ name: planName, amount: amountNumber })}
      >
        {button}
      </button>
    </div>
  );
}

export default PayCard;
