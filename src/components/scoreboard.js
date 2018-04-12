import React from 'react';
import createReactClass from "create-react-class";
import PropTypes from 'prop-types';

import Header from './Header';
import Player from './Player';

const Scoreboard = createReactClass({
  propTypes: {
    title: PropTypes.string,
    players: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    }))
  },
  render: function() {
    return (
      <div className="scoreboard">
        <Header title={this.props.title} />
          <div className="players">
            {this.props.players.map(function(player) {
              return <Player name={player.name} key={player.id} />
            })}
        </div>
      </div>
    );
  }
});

export default Scoreboard;