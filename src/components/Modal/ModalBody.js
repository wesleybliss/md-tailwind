import React from 'react';
import PropTypes from 'prop-types';

import '../../index.css'

export default function ModalBody({ children }) {
  return <div className="relative flex-auto mb-6">{children}</div>;
}

ModalBody.propTypes = {
  children: PropTypes.node.isRequired,
};
