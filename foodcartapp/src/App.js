import React, { Component } from "react";
import Items from "./components/items";
import "./App.css";

class App extends Component {
  state = {
    items: [
      {
        id: 3455890,
        value: 1,
        title: "Coconut Butter Milk",
        price: 8.5,
        img: "https://picsum.photos/100",
      },
      {
        id: 7456890,
        value: 1,
        title: "Chocolate Donuts",
        price: 4.5,
        img: "https://picsum.photos/100",
      },
      {
        id: 545890,
        value: 1,
        title: "Dried Fish",
        price: 11.9,
        img: "https://picsum.photos/100",
      },
      {
        id: 3477891,
        value: 1,
        title: "Powedered donuts",
        price: 10.5,
        img: "https://picsum.photos/100",
      },
    ],
  };

  handleIncrement = (item) => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index] = { ...item };
    items[index].value++;
    this.setState({ items });
  };

  handleDecrement = (item) => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index] = { ...item };
    if (items[index].value > 0) {
      items[index].value--;
    }
    this.setState({ items });
  };

  handleDelete = (itemId) => {
    console.log("deleted", itemId);
    const items = this.state.items.filter((c) => c.id !== itemId);
    this.setState({ items });
  };

  handleReset = () => {
    const items = this.state.items.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ items });
  };

  totalPrice = (items) => {
    var itemsPrice = 0;
    var itemPrice = 0;
    let totalprice = items.forEach((item) => {
      itemPrice = item.price * item.value;
      itemsPrice += itemPrice;
      return itemsPrice;
    });
    console.log(itemsPrice);
    return itemsPrice;
  };

  cartTitle() {
    const value = this.state.items.length;
    return value > 0 ? "Shopping Cart" : "Cart is Empty";
  }

  render() {
    return (
      <React.Fragment>
        <main className="cart-container">
          <div className="cart">
            <h3 className="cart-title">{this.cartTitle()}</h3>
            <Items
              items={this.state.items}
              onDelete={this.handleDelete}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
            />
            <div className="priceTotal">
              Total: <h1>${this.totalPrice(this.state.items)}</h1>
            </div>
            <div className="credit-section">
              {/* <h3 className="cart-title">card Details</h3> */}
              <div className="col-md-6">
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

              <div className="col-md-6">
                <div className="credit-form">
                  <form>
                    <div className="form-row">
                      <div className="form-group col-md-12">
                        <label for="inputEmail4">Name On Card</label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputEmail4"
                          placeholder="Email"
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
                          placeholder="Email"
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
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
