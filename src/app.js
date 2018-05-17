import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PlayerActionCreators from './actions/player';
import Header from './components/Header';
import Player from './components/Player';
import AddPlayer from './components/AddPlayer';

let nextId = 1;

class App extends Component {

  static defaultProps = {
    title: 'Scoreboard'
  }

  render() {
    const { dispatch, players } = this.props;
    const addPlayer = bindActionCreators(PlayerActionCreators.addPlayer, dispatch);
    const removePlayer = bindActionCreators(PlayerActionCreators.removePlayer, dispatch);
    const updatePlayerScore = bindActionCreators(PlayerActionCreators.updatePlayerScore, dispatch);

    const playerComponents = players.map((player, index) => (
      <Player
        index={index}
        name={player.name}
        score={player.score}
        key={player.name}
        updatePlayerScore={updatePlayerScore}
        removePlayer={removePlayer}
      />
    ));

    return (
      <div className="app">
        <Header title={this.props.title} players={players} />
          <div className="players">
            { playerComponents }
        </div>
        <AddPlayer addPlayer={addPlayer} />
      </div>
    )
  }
}


const mapStateToProps = state => (
  {
    players: state
  }
)

export default connect(mapStateToProps)(App);