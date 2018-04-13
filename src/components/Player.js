import React from 'react';
import createReactClass from "create-react-class";
import PropTypes from 'prop-types';

import Counter from './Counter';

Player.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  onScoreChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
}

function Player(props) {
  return (
    <div className="player">
      <div className="player-name">
      <a className="remove-player" onClick={props.onRemove}>X</a>
        {props.name}
      </div>
      <div className="player-score">
        <Counter score={props.score} onChange={props.onScoreChange} />
      </div>
    </div>
  )
}

export default Player;