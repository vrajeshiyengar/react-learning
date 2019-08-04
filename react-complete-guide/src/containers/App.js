import React, { Component } from "react";
import Persons from "../components/Persons/Persons";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import stylesheet from "./App.css";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
    this.state = {
      persons: [
        { id: "qwer1", name: "Vrajesh", age: 21 },
        { id: "asdf2", name: "Adya", age: 20 },
        { id: "zxcv3", name: "Anurag", age: 22 }
      ],
      showPersons: false,
      showCockpit: true
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

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
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };

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
    console.log("[App.js] render");
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div>
      );
    }

    return (
      <div className={stylesheet.App}>
        <ErrorBoundary>
          <button
            onClick={() => {
              this.setState({ showCockpit: false });
            }}
          >
            Destroy Cockpit
          </button>
          {this.state.showCockpit ? <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonHandler}
          /> : null}
          {persons}
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
