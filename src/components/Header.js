import React from 'react';
import createReactClass from "create-react-class";
import PropTypes from 'prop-types';

const Header = createReactClass({
  propTypes: {
    title: PropTypes.string
  },
  render: function() {
    return (
      <div className="header">
        <h1>{this.props.title}</h1>
      </div>
    );
  }
});

export default Header;