import React, { Component } from "react";
import { MdAdd } from "react-icons/md";
import { MdRemove } from "react-icons/md";
import { MdClear } from "react-icons/md";

class Item extends Component {
  render() {
    return (
      <div className="Item">
        <div className="item-details col-7">
          <div className="item-thumbnail mr-3">
            <img src={this.props.item.img} alt="" />
          </div>
          <div className="item-title">
            <h3>{this.props.item.title}</h3>
            <small>#{this.props.item.id}</small>
          </div>
        </div>

        <div className="item-actions col-5">
          <div className="itemCount mr-3 col-5">
            <div
              className="action-icon"
              onClick={() => this.props.onIncrement(this.props.item)}
            >
              <MdAdd />
            </div>

            <div className="nOfItems">{this.props.item.value}</div>

            <div
              className="action-icon"
              onClick={() => this.props.onDecrement(this.props.item)}
            >
              <MdRemove className="" />
            </div>
          </div>

          <div className="price col-5">
            <span className="currency">$</span>
            {this.props.item.price}0
          </div>

          <div
            className="item-action col-2"
            onClick={() => this.props.onDelete(this.props.item.id)}
          >
            <MdClear />
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
