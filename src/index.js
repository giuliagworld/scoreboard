import React from 'react';
import ReactDOM from 'react-dom';

import Scoreboard from './components/Scoreboard';

let PLAYERS = [
  {
    name: "Player 1",
    id: 1,
  },
  {
    name: "Player 2",
    id: 2,
  },
  {
    name: "Player 3",
    id: 3,
  }
];

ReactDOM.render(<Scoreboard title="Scoreboard" players={PLAYERS} />, document.getElementById('app'));
