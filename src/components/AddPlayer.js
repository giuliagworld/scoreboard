import React from 'react';
import createReactClass from "create-react-class";
import PropTypes from 'prop-types';

const AddPlayer = createReactClass({
  propTypes: {
    onAdd: PropTypes.func.isRequired
  },
  getInitialState: function() {
    return {
      name: ''
    }
  },
  onNameChange: function(e) {
    // update the state every time a letter is typed
    this.setState({
      name: e.target.value
    });
  },
  onSubmit: function(e) {
    // prevent the form from submitting
    e.preventDefault();
    // passing the name up the DOM tree
    // onAdd take a name to pass up
    this.props.onAdd(this.state.name)
    // clear that last name from the state
    this.setState({
      name: ''
    })
  },
  render: function() {
    return (
      <div className="add-player">
        <form className="form" onSubmit={this.onSubmit}>
          <input type="text" className="input" value={this.state.name} onChange={this.onNameChange} />
          <button type="submit" className="btn">Add Player</button>
        </form>
        <p>Click on <span className="remove-player">x</span> to remove that player</p>
      </div>
    )
  }
})

export default AddPlayer;