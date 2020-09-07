import React, { Component } from "react";

class Checkout extends Component {
  //   mobileView = (colunm) => {
  //     if (screen.width < 1000) {
  //       let col = colunm;
  //     }
  //   };

  render() {
    return (
      <div className="checkout-section">
        {/* <h3 className="cart-title">card Details</h3> */}
        <div className="col-6">
          <div className="credit-card">
            <h3>Lorem Ipsum</h3>
            <h5>**** **** **** ****</h5>
            <div className="card-date">12/25</div>
            <div className="card-bottom">
              <div className="card-name">Dana Smith</div>
              <div className="card-logo"></div>
            </div>
          </div>
        </div>

        <div className="col-6">
          <div className="credit-form">
            <form>
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label for="inputEmail4">Name On Card</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="Dana Smith"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label for="inputEmail4">Card Number</label>
                  <input
                    type="number"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="****  ****  ****  ****"
                  />
                </div>
              </div>
              <label for="inputState">Experation Date</label>
              <label for="inputEmail4">CVV</label>
              <div className="form-row">
                <div className="form-group col-md-4">
                  <select id="inputState" className="form-control">
                    <option selected>mm</option>
                    <option>...</option>
                  </select>
                </div>
                <div className="form-group col-md-4">
                  <select id="inputState" className="form-control">
                    <option selected>yyyy</option>
                    <option>...</option>
                  </select>
                </div>
                <div className="form-group col-md-4">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="xxx"
                    id="inputEmail4"
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Check Out
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;
