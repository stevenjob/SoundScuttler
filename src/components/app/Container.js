import React, { PropTypes } from 'react';

const Container = (props) => (<div>{props.children}</div>);

Container.propTypes = {
  children: PropTypes.node.isRequired
};

export default Container;
