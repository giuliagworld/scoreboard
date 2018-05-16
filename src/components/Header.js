import React from 'react';
import Stats from './Stats'
import Stopwatch from './Stopwatch';

const Header = props => {
  return (
    <div className="header">
      <h1 className="h1">{props.title}</h1>
      <Stats players={props.players} />
      <Stopwatch />
    </div>
  )
}

export default Header