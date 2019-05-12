/**
 *
 * Detail
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Description from '../Description/Loadable';
import UserReviews from '../UserReviews/Loadable';
import CallToAction from '../CallToAction/Loadable';
import { bpVeryLarge } from '../../global-styles';

function Detail() {
  return (
    <Div>
      <Description />
      <UserReviews />
      <CallToAction />
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  padding: 4.5rem;
  background-color: var(--color-grey-light-1);
  border-bottom: var(--line);
  font-size: 1.2rem;
  flex-wrap: wrap;
  @media only screen and (max-width: ${bpVeryLarge}) {
    flex-direction: column;
  }
`;

Detail.propTypes = {};

export default Detail;
