import React, { useState } from "react";
import axios from "axios";

export default function BuyNowButton({ planName, planAmount }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleBuyNow = async () => {
    setLoading(true);
    setError("");

    try {
      // 1️⃣ Create order
      const { data: orderData } = await axios.post(
        "http://localhost:5000/payment/checkout",
        { name: planName, amount: planAmount }
      );

      if (!orderData.success) {
        setError(orderData.error || "Failed to create order");
        setLoading(false);
        return;
      }

      const order = orderData.order;

      // 2️⃣ Open Razorpay checkout
      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "Your Company",
        description: planName,
        order_id: order.id,
        handler: async function (response) {
          try {
            // 3️⃣ Verify payment
            const verify = await axios.post(
              "http://localhost:5000/payment/verify",
              {
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
              }
            );

            if (verify.data.success) {
              alert("Payment successful!");
            } else {
              alert("Payment verification failed: " + verify.data.error);
            }
          } catch (err) {
            console.error("Verification Axios Error:", err.response?.data || err);
            alert("Payment verification failed");
          }
        },
        prefill: { name: "John Doe", email: "john@example.com" },
        theme: { color: "#3399cc" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error("Checkout Axios Error:", err.response?.data || err);
      setError(err.response?.data?.error || "Checkout failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleBuyNow} disabled={loading}>
        {loading ? "Processing..." : "Buy Now"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
