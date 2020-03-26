import React, { Component } from "react";
import Card from "./Card";

class List extends Component {
  state = {
    sites: [
      { title: "Google", link: "https://www.google.com" },
      { title: "Youtube", link: "https://www.youtube.com" },
      { title: "Facebook", link: "https://www.facebook.com" }
    ]
  };
  render() {
    return (
      <ul>
        {this.state.sites.map(site => (
          <li key={site.key}>
            <Card item={site} />
          </li>
        ))}
      </ul>
    );
  }
}

export default List;
