import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./Card.scss";

class Card extends Component {
  render() {
    return (
      <div className="card tcard">
        <table>
          <tr>
            <td>
              <img src={this.props.item.logo} className="tcard-logo" />
              {console.log(this.props.item.logo)}
            </td>
            <td>
              <div className="tcard-button-div">
                <a href={this.props.item.link} className="btn btn-primary">
                  {this.props.item.title}
                </a>
              </div>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Card;
