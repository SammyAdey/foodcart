import React, { Component } from "react";

class Item extends Component {
  render() {
    return (
      <div className="Item">
        <div>
          <img src={this.props.item.img} alt="" />
        </div>
        <div className="d-flex">
          <small>#{this.props.item.id}</small>
          <h3 className="ml-3">{this.props.item.title}</h3>
        </div>
        <div className="itemCount">
          <span onClick={() => this.props.onIncrement(this.props.h3item)}>
            +
          </span>
          <span className="nOfItems">{this.props.item.value}</span>
          <span onClick={() => this.props.onDecrement(this.props.item)}>-</span>
        </div>

        <span className="price">
          <span className="currency">$</span>
          {this.props.item.price}
        </span>

        <span onClick={() => this.props.onDelete(this.props.item.id)}>x</span>
      </div>
    );
  }
}

export default Item;
