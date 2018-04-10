import React from 'react';
import createReactClass from "create-react-class";
import PropTypes from 'prop-types';

import Header from './_header';
import Player from './_player';

const Scoreboard = createReactClass({
  render: function () {
    return (
      <div className="scoreboard">
        <Header />
        <div className="players">
          <Player name="Giulia" score={45} />
          <Player name="Gaby" score={75} />
        </div>
      </div>
    );
  }
});

export default Scoreboard;