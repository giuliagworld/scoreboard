import React from 'react';
import createReactClass from "create-react-class";
import PropTypes from 'prop-types';

const Counter = createReactClass({
  // getInitialState is a React function to render the state
  // change {this.props.score} to {this.state.score} because we are no longer taking the value from props but from state
  getInitialState: function () {
    return {
      score: 0
    }
  },
  incrementScore: function() {
    // setState is a React function to change the state
    this.setState({
      score: (this.state.score + 1)
    })
  },
  decrementScore: function() {
    // setState is a React function to change the state
    this.setState({
      score: (this.state.score - 1)
    })
  },
  // onClick should call the object decrementScore and not the function decrementScore()
  // if it calls the function decrementScore() it will only run once, not everytime we click the button
  render: function() {
    return (
      <div className="counter">
        <div className="counter-score"> {this.state.score} </div>
        <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
        <button className="counter-action increment" onClick={this.incrementScore}> + </button>
      </div>
    );
  }
})

export default Counter;