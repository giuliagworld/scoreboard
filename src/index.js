import React from 'react';
import ReactDOM from 'react-dom';

import Scoreboard from './components/Scoreboard';

let PLAYERS = [];

ReactDOM.render(<Scoreboard initialPlayers={PLAYERS} />, document.getElementById('app'));
