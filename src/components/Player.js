import React from 'react';
import Counter from './Counter';

const Player = props => {
  return (
    <div className="player">
      <div className="player-name">
      <a className="remove-player" onClick={() => props.removePlayer(props.index)}>x</a>
        {props.name}
      </div>
      <div className="player-score">
        <Counter
          index={props.index}
          score={props.score}
          updatePlayerScore={props.updatePlayerScore} />
      </div>
    </div>
  )
}

export default Player