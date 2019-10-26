import React, { Component } from "react";
import XpBar from "./components/XpBar";

export default class App extends Component {
  state = {
    percentage: 0
  }

  nextStep = () => {
    if (this.state.percentage === 100) return;
    this.setState(prevState => ({ percentage: prevState.percentage + 20 }));
  };

  render() {
    const { percentage } = this.state;
    const { nextStep } = this;
    return (
      <div>
        <h2> A React Progress Bar </h2>
        <XpBar percentage={percentage} />

        <div style={{ marginTop: "20px" }}>
          <button onClick={nextStep}>Next Step</button>
        </div>

        <div
          style={{ marginTop: "10px", color: "blue", marginBottom: "15px" }}
          onClick={() => this.setState({ percentage: 0 })}
        >
          Reset
        </div>
      </div>
    );
  }
}