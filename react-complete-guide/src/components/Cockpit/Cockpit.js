import React, { useEffect } from "react";
import stylesheet from "./Cockpit.css";

const cockpit = props => {
  useEffect(() => {
    console.log("[Cockpit.js] useEffect1");
    //HTTP request...
    setTimeout(() => {
      alert("Data saved to cloud!!");
    }, 1000);
    return () => {
      console.log("[Cockpit.js] Cleanup work in useEffect1");
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] useEffect2");
    return () => {
      console.log("[Cockpit.js] Cleanup work in useEffect2");
    };
  });

  const classes = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = stylesheet.Red;
  }
  if (props.personsLength <= 2) {
    classes.push(stylesheet.Red);
  }
  if (props.personsLength <= 1) {
    classes.push(stylesheet.Bold);
  }
  return (
    <div className={stylesheet.Cockpit}>
      <h1>{props.title}</h1>
      <p className={classes.join(" ")}>This is Really Working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default React.memo(cockpit);
