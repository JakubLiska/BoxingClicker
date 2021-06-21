import React, { Component } from "react";
import Rush from "./Rush";

class App extends Component {
  constructor() {
    super();
    this.state = {
      converter: 1,
      array: [0]
    };
  }

  updateConverter() {
    const { array } = this.state;
    let arrLast = array.length - 1;
    let arrPenulimate = array.length - 2;

    if (array[arrLast] - array[arrPenulimate] >= 3000) {
      this.setState({ converter: 2 });
    }
  }

  createTimeStamps() {
    this.setState(
      { array: [...this.state.array, performance.now()] },
      this.updateConverter
    );
  }

  render() {
    return (
      <div>
        <h3>Array:{this.state.array}</h3>

        <p>Converter: {this.state.converter}</p>
        <p>
          <Rush conv={() => this.createTimeStamps()} />
        </p>
      </div>
    );
  }
}

export default App;
