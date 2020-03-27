import React, { Component } from "react";
import Card from "../Card/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./List.scss";

class List extends Component {
  state = {
    sites: [
      {
        title: "Google",
        link: "https://www.google.com",
        get logo() {
          return "http://www.google.com/s2/favicons?domain=" + this.link;
        }
      },
      {
        title: "Youtube",
        link: "https://www.youtube.com",
        get logo() {
          return "http://www.google.com/s2/favicons?domain=" + this.link;
        }
      },
      {
        title: "Facebook",
        link: "https://www.facebook.com",
        get logo() {
          return "http://www.google.com/s2/favicons?domain=" + this.link;
        }
      }
    ]
  };
  render() {
    return (
      <ul className="list-group list-group-flush">
        {this.state.sites.map(site => (
          <li className="grid-item">
            <Card item={site} />
          </li>
        ))}
      </ul>
    );
  }
}

export default List;
