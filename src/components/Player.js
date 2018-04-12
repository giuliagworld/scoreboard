import React from 'react';
import createReactClass from "create-react-class";
import PropTypes from 'prop-types';

import Counter from './Counter';

const Player = createReactClass({
  propTypes: {
    name: PropTypes.string.isRequired,
  },
  render: function() {
    return (
      <div className="player">
        <div className="player-name">
          {this.props.name}
        </div>
        <div className="player-score">
          <Counter />
        </div>
      </div>
    );
  }
})

export default Player;