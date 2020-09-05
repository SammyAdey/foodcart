import React, { Component } from "react";

class Item extends Component {
  render() {
    return (
      <div className="Item">
        <div className="item-details">
          <div className="item-thumbnail mr-3">
            <img src={this.props.item.img} alt="" />
          </div>
          <div className="item-title">
            <h3>{this.props.item.title}</h3>
            <small>#{this.props.item.id}</small>
          </div>
        </div>
        <div className="item-actions">
          <div className="itemCount mr-3">
            <div onClick={() => this.props.onIncrement(this.props.h3item)}>
              +
            </div>
            <div className="nOfItems">{this.props.item.value}</div>
            <div onClick={() => this.props.onDecrement(this.props.item)}>-</div>
          </div>

          <span className="price mr-3">
            <span className="currency">$</span>
            {this.props.item.price}0
          </span>

          <span
            className="item-action"
            onClick={() => this.props.onDelete(this.props.item.id)}
          >
            x
          </span>
        </div>
      </div>
    );
  }
}

export default Item;
