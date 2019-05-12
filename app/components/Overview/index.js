/**
 *
 * Overview
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';
import sprite from '../../images/sprite.svg';
import { bpLarge, bpVeryLarge } from '../../global-styles';

function Overview() {
  return (
    <Div>
      <OverviewHeading>Hotel Las Palmas</OverviewHeading>
      <OverviewStars>
        <OverviewStarsIcon>
          <use xlinkHref={`${sprite}#icon-star`} />
        </OverviewStarsIcon>
        <OverviewStarsIcon>
          <use xlinkHref={`${sprite}#icon-star`} />
        </OverviewStarsIcon>
        <OverviewStarsIcon>
          <use xlinkHref={`${sprite}#icon-star`} />
        </OverviewStarsIcon>
        <OverviewStarsIcon>
          <use xlinkHref={`${sprite}#icon-star`} />
        </OverviewStarsIcon>
        <OverviewStarsIcon>
          <use xlinkHref={`${sprite}#icon-star`} />
        </OverviewStarsIcon>
      </OverviewStars>
      <OverviewLocation>
        <OverviewLocationIcon>
          <use xlinkHref={`${sprite}#icon-location-pin`} />
        </OverviewLocationIcon>
        <BtnInline>Albufeira, Portugal</BtnInline>
      </OverviewLocation>
      <OverviewRating>
        <OverviewRatingAverage>8.6</OverviewRatingAverage>
        <OverviewRatingCount>429 votes</OverviewRatingCount>
      </OverviewRating>
    </Div>
  );
}

const IconStyle = css`
  width: 1.75rem;
  height: 1.75rem;
  color: var(--color-primary);
  fill: currentColor;
`;

const pulsate = keyframes`
  0% {
    transform: scale(1);
    box-shadow: none;
  }
  
  50% {
    transform: scale(1.05);
    box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.25);
  }
  
  100% {
    transform: scale(1);
    box-shadow: none;
  }
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  border-bottom: var(--line);
`;

const OverviewHeading = styled.h1`
  font-size: 2.25rem;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 1.5rem 3rem;
  @media only screen and (max-width: ${bpLarge}) {
    font-size: 1.2rem;
  }
`;

const OverviewStars = styled.div`
  margin-right: auto;
  display: flex;
  align-items: center;
`;

const OverviewStarsIcon = styled.svg`
  ${IconStyle}
  :not(:last-child) {
    margin-right: 0.4rem;
  }
`;

const OverviewLocation = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  @media only screen and (max-width: ${bpVeryLarge}) {
    flex-direction: column;
  }
`;

const OverviewLocationIcon = styled.svg`
  ${IconStyle}
  margin-right: 0.5rem;
`;

const BtnInlineStyle = css`
  border: none;
  color: var(--color-primary);
  font-size: inherit;
  border-bottom: 1px solid currentColor;
  padding-bottom: 2px;
  display: inline-block;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.2s;
  span {
    margin-left: 3px;
    transition: margin-left 0.2s;
  }
  :hover {
    color: var(--color-grey-dark-1);
    span {
      margin-left: 8px;
    }
  }
  :focus {
    outline: none;
    animation: ${pulsate} 1s infinite;
  }
`;

const BtnInline = styled.button`
  ${BtnInlineStyle}
`;

const OverviewRating = styled.div`
  background-color: var(--color-primary);
  margin-left: 3rem;
  color: #fff;
  align-self: stretch;
  padding: 0 2.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const OverviewRatingAverage = styled.div`
  font-size: 2.25rem;
  font-weight: 300;
  margin-bottom: 0.5rem;
`;

const OverviewRatingCount = styled.div`
  font-size: 0.8rem;
  text-transform: uppercase;
`;

Overview.propTypes = {};

export default Overview;

export { BtnInlineStyle };

export { pulsate };
