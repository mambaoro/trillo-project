/**
 *
 * Main
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Nav from '../Nav/Loadable';
import HotelView from '../HotelView/Loadable';
import Logo from '../Logo/Loadable';
import Search from '../Search/Loadable';
import UserNavigation from '../UserNavigation';
import { bpMedium, bpSmall } from '../../global-styles';

function Main() {
  return (
    <Container>
      <Header>
        <Logo />
        <Search />
        <UserNavigation />
      </Header>
      <Content>
        <Nav />
        <HotelView />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  max-width: 120rem;
  margin: 8rem auto;
  background-color: var(--color-grey-light-2);
  box-shadow: var(--shadow-dark);
  min-height: 50rem;
  @media only screen and (max-width: ${bpMedium}) {
    margin: 0;
  }
`;

const Header = styled.header`
  font-size: 1.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 7rem;
  background-color: #fff;
  border-bottom: var(--line);
`;

const Content = styled.div`
  display: flex;
  @media only screen and (max-width: ${bpSmall}) {
    flex-direction: column;
  }
`;

Main.propTypes = {};

export default Main;
