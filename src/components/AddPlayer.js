import React, { Component } from 'react';

export default class AddPlayer extends Component {

  state = {
    name: ''
  }

  onNameChange = (e) => {
    // update the state every time a letter is typed
    this.setState({
      name: e.target.value
    });
  }

  onSubmit = (e) => {
    // prevent the form from submitting
    e.preventDefault();
    // passing the name up the DOM tree
    // onAdd take a name to pass up
    this.props.onAdd(this.state.name)
    // clear that last name from the state
    this.setState({
      name: ''
    })
  }

  render() {
    return (
      <div className="add-player">
        <form className="form" onSubmit={this.onSubmit}>
          <input type="text" className="input" placeholder="Player Name" value={this.state.name} onChange={this.onNameChange} />
          <button type="submit" className="btn">Add Player</button>
        </form>
        <p className="info">To remove any of the players just click on the <span className="remove-player">x</span> next to the player you want to remove.</p>
      </div>
    )
  }
}