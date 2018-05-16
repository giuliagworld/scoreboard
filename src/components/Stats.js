import React from 'react';

const Stats = props => {

  const totalPlayers = props.players.length;
  const totalPoints = props.players.reduce(function(total, player) {
    return total + player.score;
  }, 0);

  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Players:</td>
          <td className="value">{totalPlayers}</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td className="value">{totalPoints}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Stats