import React from "react";

const Payment = () => {
  return (
    <section className="payment-section">
      <h1 className="heading">Payment Options</h1>
      <p className="text">
        We offer the following payment methods for your convenience:
      </p>
      <ul className="payment-list">
        <li>Zelle </li>
        <li>Check </li>
        <li>Cash</li>
      </ul>
      <p className="note">
        An 8% tax will be added for Zelle and Check payments unless the customer opts for regular prices.
      </p>
      <p className="note">Please contact us for further instructions on how to complete your payment.</p>
    </section>
  );
};

export default Payment;
