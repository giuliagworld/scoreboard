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
      <div className="add-player-form">
        <form onSubmit={this.onSubmit}>
          <input type="text" value={this.state.name} onChange={this.onNameChange} />
          <input type="submit" value="Add Player" />
        </form>
      </div>
    )
  }
})

export default AddPlayer;