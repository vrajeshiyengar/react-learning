import React, { PureComponent } from "react";
import Person from "./Person/Person";

class Persons extends PureComponent {
  //     static getDerivedStateFromProps(props, state) {
  //       console.log("[Persons.js] getDerivedStateFromProps");
  //       return state;
  //     }

  //   componentWillReceiveProps(props) {
  //     console.log("[Persons.js] componentWillReceiveProps", props);
  //   }

//   shouldComponentUpdate(nextProps, nextState) {
//     console.log("[Persons.js] shouldComponentUpdate");
//     if (
//       nextProps.persons !== this.props.persons ||
//       nextProps.clicked !== this.props.clicked ||
//       nextProps.changed !== this.props.changed
//     ) {
//       return true;
//     } else {
//       return false;
//     }
//   }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate");
    return { message: "OWW WAZAOWSKIII!" };
  }

  componentWillUnmount() {
    console.log("[Persons.js] componentWillUnmount");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js] componentDidUpdate", snapshot);
  }

  render() {
    console.log("[Persons.js] rendering...");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
