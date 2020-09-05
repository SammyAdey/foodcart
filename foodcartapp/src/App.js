import React, { Component } from "react";
import Items from "./components/items";
import "./App.css";

class App extends Component {
  state = {
    items: [
      {
        id: 3455890,
        value: 0,
        title: "Coconut Butter Milk",
        price: 8.5,
        img: "https://picsum.photos/100",
      },
      {
        id: 7456890,
        value: 0,
        title: "Chocolate Donuts",
        price: 4.5,
        img: "https://picsum.photos/100",
      },
      {
        id: 545890,
        value: 0,
        title: "Dried Fish",
        price: 11.9,
        img: "https://picsum.photos/100",
      },
      {
        id: 3477891,
        value: 0,
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
    items[index].value--;
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

  // totalPrice = () => {
  //   const totalprice = this.state.items.map((c) => {
  //     total += c.price;
  //     return c;
  //   });
  //   return totalprice;
  // };

  render() {
    return (
      <React.Fragment>
        <main className="cart-container">
          <div className="cart">
            <Items
              items={this.state.items}
              onDelete={this.handleDelete}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
            />
            <div className="priceTotal">
              Total: {this.state.items.totalPrice}
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
