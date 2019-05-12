/**
 *
 * UserNavigation
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import sprite from '../../images/sprite.svg';
import userPhoto from '../../images/user.jpg';

function UserNavigation() {
  return (
    <Nav>
      <UserIconBox>
        <UserNavIcon>
          <use xlinkHref={`${sprite}#icon-bookmark`} fill="#777">&nbsp;</use>
        </UserNavIcon>
        <UserNavNotification>7</UserNavNotification>
      </UserIconBox>
      <UserIconBox>
        <UserNavIcon>
          <use xlinkHref={`${sprite}#icon-chat`} fill="#777">&nbsp;</use>
        </UserNavIcon>
        <UserNavNotification>13</UserNavNotification>
      </UserIconBox>
      <UserNavUser>
        <UserNavUserPhoto src={userPhoto} alt="User photo" />
        <UserNavUserName>Jonas</UserNavUserName>
      </UserNavUser>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  align-self: stretch;
  align-items: center;
  & > * {
    padding: 0 2rem;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
  }
  & > * {
    :hover {
      background-color: var(--color-grey-light-2);
    }
  }
`;

const UserIconBox = styled.div`
  position: relative;
`;

const UserNavIcon = styled.svg`
  height: 2.25rem;
  width: 2.225rem;
`;

const UserNavNotification = styled.span`
  font-size: 0.8rem;
  height: 1.75rem;
  width: 1.75rem;
  border-radius: 50%;
  background-color: var(--color-primary);
  color: #fff;
  position: absolute;
  top: 1.5rem;
  right: 1.1rem;
  display: flex;
  justify-content: center;
`;

const UserNavUser = styled.div``;

const UserNavUserPhoto = styled.img`
  height: 3.75rem;
  border-radius: 50%;
  margin-right: 1rem;
`;

const UserNavUserName = styled.span``;

UserNavigation.propTypes = {};

export default UserNavigation;
