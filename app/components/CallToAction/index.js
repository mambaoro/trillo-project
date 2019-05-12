/**
 *
 * CallToAction
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { pulsate } from '../Overview';

function CallToAction() {
  return (
    <Div>
      <CTABookNow>
        Good news! We have 4 free rooms for your selected dates!
      </CTABookNow>
      <Btn>
        <ButtonVisible>Book now</ButtonVisible>
        <ButtonInvisible>Only 4 rooms left</ButtonInvisible>
      </Btn>
    </Div>
  );
}

const Div = styled.div`
  padding: 3.5rem 0;
  text-align: center;
  margin: auto;
`;

const CTABookNow = styled.h2`
  text-transform: uppercase;
  font-size: 1.6rem;
  font-weight: 300;
  flex: 1;
  margin-bottom: 2.5rem;
`;

const Btn = styled.button`
  border: none;
  font-weight: 300;
  font-size: 1.5rem;
  text-transform: uppercase;
  border-radius: 100px;
  background-image: linear-gradient(
    to right,
    var(--color-primary-light),
    var(--color-primary-dark)
  );
  color: #fff;
  position: relative;
  overflow: hidden;
  :hover > span:first-of-type {
    transform: translateY(100%);
  }
  :hover > span:last-of-type {
    top: 0;
  }
  :active,
  :focus {
    outline: none;
    animation: ${pulsate} 1s infinite;
  }
  :hover {
    background-image: linear-gradient(
      to left,
      var(--color-primary-light),
      var(--color-primary-dark)
    );
    cursor: pointer;
  }
  transition: all 0.2s;
`;

const sharedStyleButton = css`
  display: inline-block;
  height: 100%;
  width: 100%;
  transition: all 0.2s;
`;

const ButtonVisible = styled.span`
  padding: 2rem 7.5rem;
  ${sharedStyleButton}
`;

const ButtonInvisible = styled.span`
  position: absolute;
  padding: 2rem 0;
  ${sharedStyleButton}
  left: 0%;
  top: -100%;
`;

CallToAction.propTypes = {};

export default CallToAction;
