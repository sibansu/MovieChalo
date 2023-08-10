import React from "react";

const Payment = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Payment successfull");
  };

  return (
    <div className="container">
      <h1>Payment</h1>
      <div className="payment-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              className="form-control"
              id="cardNumber"
              name="cardNumber"
              required
            />
          </div>
          <div className="row">
            <div className="form-group col-md-6">
              <label htmlFor="expiry">Expiry Date</label>
              <input
                type="text"
                className="form-control"
                id="expiry"
                name="expiry"
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="cvv">CVV</label>
              <input
                type="text"
                className="form-control"
                id="cvv"
                name="cvv"
                required
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;
