import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "cocktails",
        info: "blah blah cocktails"
      },
      {
        icon: <FaHiking />,
        title: "hiking",
        info: "blah blah hiking"
      },
      {
        icon: <FaShuttleVan />,
        title: "van",
        info: "blah blah van"
      },
      {
        icon: <FaBeer />,
        title: "beer",
        info: "blah blah beer"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
