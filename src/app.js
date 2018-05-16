import React, { Component } from 'react';
import Header from './components/Header';
import Player from './components/Player';
import AddPlayer from './components/AddPlayer';

let nextId = 1;

export default class App extends Component {

  static defaultProps = {
    title: 'Scoreboard'
  }

  // state = {
  //   players: this.props.initialPlayers
  // }
  state = {
    players: [
      {
        name: 'Jim Hoskins',
        score: 31,
      },
      {
        name: 'Andrew Chalkley',
        score: 20,
      },
      {
        name: 'Alena Holligan',
        score: 50,
      },
    ]
  };

  // passing the index of the PLAYERS array and the delta is the number by which we should change the score
  onScoreChange = (index, delta) => {
    this.state.players[index].score += delta;
    // above not enough
    // below indicates to react that the state has change and it should be re-rendered
    // setState is a React function to change the state
    if (this.state.players[index].score >= 0) {
      this.setState(this.state);
    }
    else {
      this.state.players[index].score = 0;
      this.setState(this.state);
      alert("Really? You can't go lower than zero!");
    }
  }

  // add player to state using the name argument that refers to the name coming from onSubmit
  onPlayerAdd = (name) => {
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
  }

  onRemovePlayer = (index) => {
    this.state.players.splice(index, 1)
    this.setState(this.state)
  }

  render() {
    return (
      <div className="app">
        <Header title={this.props.title} players={this.state.players} />
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
}

