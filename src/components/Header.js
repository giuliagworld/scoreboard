import React from 'react';
import createReactClass from "create-react-class";
import PropTypes from 'prop-types';

function Header(props) {
  return (
    <div className="header">
      <h1>{props.title}</h1>
    </div>
  );
}

// optional becaue we set a default value
Header.propTypes = {
  title: PropTypes.string
}

export default Header;