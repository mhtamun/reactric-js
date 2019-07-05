import React, { Component } from "react";
import { getLatestInformation } from "../models/information";

class Index extends Component {
  static async getInitialProps({ req }) {
    console.log("getInitialProps called...");

    const result = await getLatestInformation();
    console.log(`Result: ${JSON.stringify(result)}`);

    return {
      version: "1.0.0",
      description:
        "A JS framework built for developers who need a simple standalone toolkit to create full-featured web applications powered by ReactJS, KNEX.JS to give the feel of old school web development using MySQL."
    };
  }

  render() {
    console.log("render called...");

    const { version, description } = this.props;

    return (
      <div>
        <h1>Reactric JS</h1>
        <h3>Versioin {version}</h3>
        <p>{description}</p>
      </div>
    );
  }
}

export default Index;
