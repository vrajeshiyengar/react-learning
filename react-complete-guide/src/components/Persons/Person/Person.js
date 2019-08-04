import React, { Component } from "react";
import stylesheet from "./Person.css";

class Person extends Component {
  render() {
    console.log("[Person.js] rendering...");
    return (
      <div className={stylesheet.Person}>
        <p onClick={this.props.click}>
          I'm {this.props.name} and my age is {this.props.age} !
        </p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Person;
