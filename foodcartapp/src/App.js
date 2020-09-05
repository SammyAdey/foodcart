import React, { Component } from "react";
import Items from "./components/items";
import "./App.css";

class App extends Component {
  state = {
    items: [
      { id: 1, value: 0, title: "Test1", price: 8.5 },
      { id: 2, value: 0, title: "Test1", price: 4.5 },
      { id: 3, value: 0, title: "Test1", price: 11.9 },
      { id: 4, value: 0, title: "Test1", price: 10.5 },
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
              {this.state.items.filter((c) => c.value > 0).length}
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;