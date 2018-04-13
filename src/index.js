import React from 'react';
import ReactDOM from 'react-dom';

import Scoreboard from './components/Scoreboard';

let PLAYERS = [
  {
    name: "Giulia",
    score: 0,
    id: 1,
  },
];

ReactDOM.render(<Scoreboard initialPlayers={PLAYERS} />, document.getElementById('app'));
