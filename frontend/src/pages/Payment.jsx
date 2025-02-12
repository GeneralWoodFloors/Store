import React from "react";
import "../styles/Payment.css"
import checkIcon from "../assets/check-icon.jpg"
import zelleIcon from "../assets/Zelle-icon.png"
import cashIcon from "../assets/cash-icon.png"

const Payment = () => {
  return (
    <section className="payment-section">
      <h1 className="heading">Payment Options</h1>
      <p className="text">
        We offer the following payment methods for your convenience:
      </p>
      <ul className="payment-list">
        <li><img src={zelleIcon} alt="Zelle icon" className="payment-icon" /> Zelle</li>
        <li><img src={checkIcon} alt="Check icon" className="payment-icon" /> Check</li>
        <li><img src={cashIcon} alt="Cash icon" className="payment-icon" /> Cash</li>
      </ul>
      <p className="note">
        An 8% tax will be added for Zelle and Check payments unless the customer opts for regular prices.
      </p>
      <p className="note">Please contact us for further instructions on how to complete your payment.</p>
    </section>
  );
};

export default Payment;
