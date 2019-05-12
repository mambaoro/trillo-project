/**
 *
 * SearchIcon
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import sprite from '../../images/sprite.svg';

function SearchIcon() {
  return (
    <SVG>
      <use xlinkHref={`${sprite}#icon-magnifying-glass`} fill="#999" />
    </SVG>
  );
}

const SVG = styled.svg`
  height: 2rem;
  width: 2rem;
`;

SearchIcon.propTypes = {};

export default SearchIcon;
