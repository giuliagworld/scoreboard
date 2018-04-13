import React from 'react';
import createReactClass from "create-react-class";
import PropTypes from 'prop-types';

import Header from './Header';
import Player from './Player';
import AddPlayer from './AddPlayer';

let nextId = 1;

const Scoreboard = createReactClass({
  propTypes: {
    title: PropTypes.string,
    initialPlayers: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired
    })).isRequired
  },
  // getDefaultProps is a React function
  getDefaultProps: function() {
    return {
      title: 'Scoreboard'
    }
  },
  // getInitialState is a React function to render the state
  // change {this.props.score} to {this.state.score} because we are no longer taking the value from props but from state
  getInitialState: function() {
    return {
      players: this.props.initialPlayers
    }
  },
  // passing the index of the PLAYERS array and the delta is the number by which we should change the score
  onScoreChange: function(index, delta) {
    this.state.players[index].score += delta;
    // above not enough
    // below indicates to react that the state has change and it should be re-rendered
    // setState is a React function to change the state
    this.setState(this.state);
  },
  // add player to state using the name argument that refers to the name coming from onSubmit
  onPlayerAdd: function(name) {
    if (name) {
      this.state.players.push({
        name: name,
        score: 0,
        id: nextId
      })
      this.setState(this.state)
      nextId += 1
    }
    else {
      alert('Hey! Enter your name!');
    }
  },
  onRemovePlayer: function(index) {
    this.state.players.splice(index, 1)
    this.setState(this.state)
  },
  render: function() {
    return (
      <div className="scoreboard">
        <Header title={this.props.title} />
          <div className="players">
            {this.state.players.map(function(player, index) {
              return (
                <Player
                  // We are actually inside of a function inside of our map iterator, which means within this function, "this" doesn't point to our instance.
                  // So what we need to do is for our function that we passed to the iterator, we actually do need to call .bind(this).
                  // When we called .bind(this) on our anonymous function, it will make the "this" within our function applied to the same "this" that it would be outside.
                  onScoreChange={function(delta) {this.onScoreChange(index, delta)}.bind(this)}
                  onRemove={function() {this.onRemovePlayer(index)}.bind(this)}
                  name={player.name}
                  score={player.score}
                  key={player.id} />
              );
            }.bind(this))}
        </div>
        <AddPlayer onAdd={this.onPlayerAdd} />
      </div>
    )
  }
})

export default Scoreboard;