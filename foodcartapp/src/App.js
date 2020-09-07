import React, { Component } from "react";
import Items from "./components/items";
import Checkout from "./components/checkout";
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
            <div className="c col-8">
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
            </div>
            <div className="c col-4">
              <Checkout />
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
