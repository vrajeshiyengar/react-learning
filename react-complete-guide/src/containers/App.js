import React, { Component } from "react";
import Person from "../components/Persons/Person/Person";
import stylesheet from "./App.css";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";

class App extends Component {
  state = {
    persons: [
      { id: "qwer1", name: "Vrajesh", age: 21 },
      { id: "asdf2", name: "Adya", age: 20 },
      { id: "zxcv3", name: "Anurag", age: 22 }
    ],
    showPersons: false
  };

  switchNameHandler = newName => {
    this.setState({
      persons: [
        { id: "qwer1", name: newName, age: 21 },
        { id: "asdf2", name: "Adya", age: 20 },
        { id: "zxcv3", name: "Anurag", age: 22 }
      ]
    });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.userid === id;
    });

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    // const style = {
    //   backgroundColor: "green",
    //   color: "white",
    //   font: "inherit",
    //   border: "1px solid",
    //   borderRadius: 5,
    //   padding: 8,
    //   cursor: "pointer"
    // };

    let persons = null;
    let btnClass = "";

    if (this.state.showPersons) {
      // style.backgroundColor = "red";
      btnClass = stylesheet.Red;
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <ErrorBoundary key={person.id}>
                <Person
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  changed={event => this.nameChangedHandler(event, person.id)}
                />
              </ErrorBoundary>
            );
          })}
        </div>
      );
    }
    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push(stylesheet.Red);
    }
    if (this.state.persons.length <= 1) {
      classes.push(stylesheet.Bold);
    }
    return (
      <div className={stylesheet.App}>
        <h1>Hi , I'm a React App</h1>
        <p className={classes.join(" ")}>This is Really Working!</p>
        <button className={btnClass} onClick={this.togglePersonHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
