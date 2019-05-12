/**
 *
 * Nav
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
// import sprite from '../../images/sprite.svg';
import iconHome from '../../images/SVG/home.svg';
import iconAircraftTakeOff from '../../images/SVG/aircraft-take-off.svg';
import iconKey from '../../images/SVG/key.svg';
import iconMap from '../../images/SVG/map.svg';

import { bpSmall, bpVeryLarge } from '../../global-styles';

function Nav() {
  return (
    <Sidebar>
      <NavList>
        <NavItem className="active">
          <NavLink href="#">
            <NavIconObject data={iconHome} type="image/svg+xml" />
            <span>Hotel</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <NavIconObject data={iconAircraftTakeOff} type="image/svg+xml" />
            <span>Flight</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <NavIconObject data={iconKey} type="image/svg+xml" />
            <span>Car rental</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <NavIconObject data={iconMap} type="image/svg+xml" />
            <span>Tours</span>
          </NavLink>
        </NavItem>
      </NavList>
      <NavLegal>&copy; 2019 by trillo. All right reserved.</NavLegal>
    </Sidebar>
  );
}

const Sidebar = styled.nav`
  background-color: var(--color-grey-dark-1);
  flex: 0 0 18%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (max-width: ${bpSmall}) {
    flex-direction: row;
  }
`;

const NavList = styled.ul`
  font-size: 1.4rem;
  list-style: none;
  margin-top: 3.5rem;
  @media only screen and (max-width: ${bpSmall}) {
    display: flex;
    margin: 0;
  }
`;

const NavItem = styled.li`
  position: relative;
  :not(:last-child) {
    margin-bottom: 0.5rem;
    @media only screen and (max-width: ${bpSmall}) {
      margin: 0;
    }
  }
  @media only screen and (max-width: ${bpSmall}) {
    flex: 1;
    display: flex;
  }
  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 3px;
    background-color: var(--color-primary);
    transform: scaleY(0);
    transition: transform 0.2s, width 0.4s cubic-bezier(1, 0, 0, 1) 0.2s,
      background-color 0.1s;
  }
  :hover ::before,
  &.active ::before {
    transform: scaleY(1);
    width: 100%;
  }
  :active::before {
    background-color: var(--color-primary-dark);
  }
`;

const NavLink = styled.a`
  :link,
  :visited {
    color: var(--color-grey-light-1);
    text-decoration: none;
    text-transform: uppercase;
    display: block;
    padding: 1.5rem 3rem;
    display: flex;
    align-items: center;
    outline: none;
    position: relative;
    z-index: 10;
    margin: auto;
    @media only screen and (max-width: ${bpSmall}) {
      padding: 1.5rem 2rem;
      margin: auto;
    }
  }
`;

// const NavIcon = styled.svg`
//   color: var(--color-grey-light-1);
//   width: 1.75rem;
//   height: 1.75rem;
//   margin-right: 2rem;
//   fill: currentColor;
//   @media only screen and (max-width: ${bpVeryLarge}) {
//     display: none;
//   }
// `;

const NavIconObject = styled.object`
  color: var(--color-grey-light-1);
  width: 1.75rem;
  height: 1.75rem;
  margin-right: 2rem;
  fill: currentColor;
  @media only screen and (max-width: ${bpVeryLarge}) {
    display: none;
  }
`;

const NavLegal = styled.div`
  font-size: 1.2rem;
  text-align: center;
  color: var(--color-grey-light-4);
  padding: 2.5rem;
  @media only screen and (max-width: ${bpSmall}) {
    display: none;
  }
`;

Nav.propTypes = {};

export default Nav;
