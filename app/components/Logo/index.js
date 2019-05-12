/**
 *
 * Logo
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import logo from '../../images/logo.png';

function Logo() {
  return <Img src={logo} alt="logo" />;
}

const logoCss = css`
  height: 3.5rem;
`;

const Img = styled.img`
  ${logoCss}
  margin-left: 2rem;
`;

Logo.propTypes = {};

export default Logo;
