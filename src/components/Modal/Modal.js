import React from 'react';
import {
  oneOfType, element, arrayOf, string,
} from 'prop-types';

import { Container, Content } from './Modal.styles';

const Modal = ({ children, size }) => (
  <Container>
    <Content size={size}>{children}</Content>
  </Container>
);

Modal.propTypes = {
  children: oneOfType([element, arrayOf(element)]).isRequired,
  size: string,
};

Modal.defaultProps = {
  size: 'default',
};

export default Modal;
