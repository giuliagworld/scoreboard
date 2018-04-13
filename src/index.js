import React from 'react';
import ReactDOM from 'react-dom';

import Scoreboard from './components/Scoreboard';

let PLAYERS = [
  {
    name: "Player 1",
    score: 2,
    id: 1,
  },
  {
    name: "Player 2",
    score: 4,
    id: 2,
  },
  {
    name: "Player 3",
    score: 6,
    id: 3,
  }
];

ReactDOM.render(<Scoreboard initialPlayers={PLAYERS} />, document.getElementById('app'));
