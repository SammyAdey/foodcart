import React, { Component } from "react";
import Item from "./item";

class Items extends Component {
  render() {
    return (
      <div>
        {this.props.items.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Items;
