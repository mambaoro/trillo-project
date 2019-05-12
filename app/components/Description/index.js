/**
 *
 * Description
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import user3 from '../../images/user-3.jpg';
import user4 from '../../images/user-4.jpg';
import user5 from '../../images/user-5.jpg';
import user6 from '../../images/user-6.jpg';
import sprite from '../../images/sprite.svg';
import {
  bpVeryBig,
  bpVeryLarge,
  bpVeryMedium,
  bpSmall,
} from '../../global-styles';

function Description() {
  return (
    <Div>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi
        dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut
        corporis incidunt deserunt quae architecto voluptate.
      </Paragraph>
      <Paragraph>
        Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto
        voluptate delectus, inventore iure aliquid aliquam.
      </Paragraph>
      <List>
        <ListItem>
          <ListItemIcon>
            <use xlinHref={`${sprite}#icon-chevron-thin-right`} />
          </ListItemIcon>
          <span>Close to the beach</span>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <use xlinHref={`${sprite}#icon-chevron-thin-right`} />
          </ListItemIcon>
          <span>Breakfast included</span>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <use xlinHref={`${sprite}#icon-chevron-thin-right`} />
          </ListItemIcon>
          <span>Free airport shuttle</span>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <use xlinHref={`${sprite}#icon-chevron-thin-right`} />
          </ListItemIcon>
          <span>Free wifi in all rooms</span>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <use xlinHref={`${sprite}#icon-chevron-thin-right`} />
          </ListItemIcon>
          <span>Air conditioning and heating</span>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <use xlinHref={`${sprite}#icon-chevron-thin-right`} />
          </ListItemIcon>
          <span>Pets allowed</span>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <use xlinHref={`${sprite}#icon-chevron-thin-right`} />
          </ListItemIcon>
          <span>We speak all languages</span>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <use xlinHref={`${sprite}#icon-chevron-thin-right`} />
          </ListItemIcon>
          <span>Perfect for families</span>
        </ListItem>
      </List>
      <Recommend>
        <RecommendCount>
          Lucy and 3 other friends recommend this hotel.
        </RecommendCount>
        <RecommendFriends>
          <RecommendPhoto src={user3} alt="Friend 1" />
          <RecommendPhoto src={user4} alt="Friend 2" />
          <RecommendPhoto src={user5} alt="Friend 3" />
          <RecommendPhoto src={user6} alt="Friend 4" />
        </RecommendFriends>
      </Recommend>
    </Div>
  );
}

const Div = styled.div`
  background-color: #fff;
  flex: 0 0 60%;
  margin-right: 4.5rem;
  box-shadow: var(--shadow-light);
  padding: 3rem;
  align-self: flex-start;
  @media only screen and (max-width: ${bpVeryLarge}) {
    margin-bottom: 3.5rem;
  }
`;

const Paragraph = styled.p`
  :not(:last-of-type) {
    margin-bottom: 2rem;
  }
`;

const List = styled.ul`
  margin: 3rem 0;
  list-style: none;
  border-top: var(--line);
  border-bottom: var(--line);
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  flex: 0 0 50%;
  margin-bottom: 0.7rem;
`;

const ListItemIcon = styled.svg`
  background-color: var(--color-primary);
  height: 1rem;
  width: 1rem;
  margin-right: 0.7rem;
  display: inline-block;
`;

const Recommend = styled.div`
  color: var(--color-grey-dark-2);
  display: flex;
  align-items: center;
  @media only screen and (max-width: ${bpSmall}) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const RecommendCount = styled.p`
  margin-right: auto;
  @media only screen and (max-width: ${bpVeryBig}) {
    width: 50%;
  }
  @media only screen and (max-width: ${bpVeryMedium}) {
    width: 30%;
  }
  @media only screen and (max-width: ${bpSmall}) {
    margin: auto;
    width: 100%;
    margin-bottom: 1.5rem;
  }
`;

const RecommendFriends = styled.div``;

const RecommendPhoto = styled.img`
  box-sizing: content-box;
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  border: 3px solid #fff;
  :not(:last-child) {
    margin-right: -1.2rem;
  }
  @media only screen and (max-width: ${bpVeryMedium}) {
    height: 3.5rem;
    width: 3.5rem;
  }
`;

Description.propTypes = {};

export default Description;
