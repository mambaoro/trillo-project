/**
 *
 * HotelView
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Gallery from '../Gallery/Loadable';
import Overview from '../Overview/Loadable';
import Detail from '../Detail/Loadable';

function HotelView() {
  return (
    <Main>
      <Gallery />
      <Overview />
      <Detail />
    </Main>
  );
}

const Main = styled.main`
  background-color: #fff;
  flex: 1;
`;

HotelView.propTypes = {};

export default HotelView;
