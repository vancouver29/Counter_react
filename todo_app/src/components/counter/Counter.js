import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Counter.css";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  render() {
    return (
      <div className="coutner">
        <CounterButton
          by={1}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <CounterButton
          by={5}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <CounterButton
          by={10}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <span className="count">{this.state.counter}</span>
        <div>
          <button className="reset" onClick={this.reset}>
            Reset
          </button>
        </div>
      </div>
    );
  }

  reset() {
    // console.log(`increment from child - ${by}`);
    this.setState({
      counter: 0,
    });
  }

  increment(by) {
    // console.log(`increment from child - ${by}`);
    this.setState((prevState) => {
      return { counter: prevState.counter + by };
    });
  }

  decrement(by) {
    // console.log(`increment from child - ${by}`);
    this.setState((prevState) => {
      return { counter: prevState.counter - by };
    });
  }
}

// Class Component
class CounterButton extends Component {
  //Define the initial state in a constructor
  //state => counter 0
  constructor() {
    super();
    this.state = {
      counter: 0,
    };

    // this.increment = this.increment.bind(this);
    // this.decrement = this.decrement.bind(this);
  }

  render() {
    //const style = { fontSize: "50px", padding: "15px 30px" };

    return (
      <div className="counter">
        <button onClick={() => this.props.incrementMethod(this.props.by)}>
          +{this.props.by}
        </button>
        <button onClick={() => this.props.decrementMethod(this.props.by)}>
          -{this.props.by}
        </button>
        {/* <span className="count">{this.state.counter}</span> */}
      </div>
    );
  }

  //   increment() {
  //     // Update state - counter ++
  //     //console.log("increment");
  //     this.setState(() => {
  //       return { counter: this.state.counter + this.props.by };
  //     });

  //     this.props.incrementMethod(this.props.by);
  //   }

  //   decrement() {
  //     // Update state - counter ++
  //     //console.log("increment");
  //     this.setState(() => {
  //       return { counter: this.state.counter - this.props.by };
  //     });

  //     this.props.decrementMethod(this.props.by);
  //   }
}

CounterButton.defaultProps = {
  by: 1,
};

CounterButton.propTypes = {
  by: PropTypes.number,
};

export default Counter;
