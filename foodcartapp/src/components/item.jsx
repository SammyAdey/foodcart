import React, { Component } from "react";

class Item extends Component {
  render() {
    return (
      <div className="Item">
        <div className="itemCount">
          <span onClick={() => this.props.onIncrement(this.props.item)}>+</span>
          <span className="nOfItems">{this.props.item.value}</span>
          <span onClick={() => this.props.onDecrement(this.props.item)}>-</span>
        </div>

        <span className="price">{this.props.item.price}</span>

        <span onClick={() => this.props.onDelete(this.props.item.id)}>x</span>
      </div>
    );
  }
}

export default Item;
