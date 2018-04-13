import React from 'react';
import createReactClass from "create-react-class";
import PropTypes from 'prop-types';

Header.propTypes = {
  title: PropTypes.string
}

function Header(props) {
  return (
    <div className="header">
      <h1 className="h1">{props.title}</h1>
    </div>
  )
}

export default Header;