import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <h4>
        <a href={this.props.item.link}>{this.props.item.title}</a>
      </h4>
    );
  }
}

export default Card;
