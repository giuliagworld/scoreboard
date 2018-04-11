import React from 'react';
import ReactDOM from 'react-dom';

import Scoreboard from './components/Scoreboard';

let PLAYERS = [
  {
    name: "Player 1",
    score: 31,
    id: 1,
  },
  {
    name: "Player 2",
    score: 35,
    id: 2,
  },
  {
    name: "Player 3",
    score: 42,
    id: 3,
  }
];

ReactDOM.render(<Scoreboard players={PLAYERS} />, document.getElementById('app'));
