import React from 'react';
import Counter from './Counter';

const Player = props => {
  return (
    <div className="player">
      <div className="player-name">
      <a className="remove-player" onClick={props.onRemove}>x</a>
        {props.name}
      </div>
      <div className="player-score">
        <Counter score={props.score} onChange={props.onScoreChange} />
      </div>
    </div>
  )
}

export default Player