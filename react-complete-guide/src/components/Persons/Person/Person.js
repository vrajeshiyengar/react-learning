import React from "react";
import stylesheet from "./Person.css";

const person = props => {
  // const rnd = Math.random();
  // if (rnd > 0.7) {
  //   throw new Error("Something went wrong");
  // }
  return (
    <div className={stylesheet.Person}>
      <p onClick={props.click}>
        I'm {props.name} and my age is {props.age} !
      </p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
