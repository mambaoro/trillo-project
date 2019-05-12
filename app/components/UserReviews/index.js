/**
 *
 * UserReviews
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BtnInlineStyle } from '../Overview';
import user1 from '../../images/user-1.jpg';
import user2 from '../../images/user-2.jpg';
import quotationMark from '../../images/quotation-mark.svg';

function UserReviews() {
  return (
    <Div>
      <Review>
        <QuotationMark src={quotationMark} alt="quotation mark" />
        <ReviewText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
          doloremque architecto dicta animi, totam, itaque officia ex.
        </ReviewText>
        <ReviewUser>
          <ReviewPhoto src={user1} alt="User 1" />
          <ReviewUserBox>
            <ReviewUserName>Nick Smith</ReviewUserName>
            <ReviewUserDate>Feb 23rd, 2017</ReviewUserDate>
          </ReviewUserBox>
          <ReviewRating>7.8</ReviewRating>
        </ReviewUser>
      </Review>
      <Review>
        <QuotationMark src={quotationMark} alt="quotation mark" />
        <ReviewText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
          doloremque architecto dicta animi.
        </ReviewText>
        <ReviewUser>
          <ReviewPhoto src={user2} alt="User 2" />
          <ReviewUserBox>
            <ReviewUserName>Mary Thomas</ReviewUserName>
            <ReviewUserDate>Sept 13th, 2017</ReviewUserDate>
          </ReviewUserBox>
          <ReviewRating>9.3</ReviewRating>
        </ReviewUser>
      </Review>
      <BtnInline>
        Show all <span>&rarr;</span>
      </BtnInline>
    </Div>
  );
}

const Div = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Review = styled.figure`
  position: relative;
  background-color: #fff;
  box-shadow: var(--shadow-light);
  padding: 3rem;
  margin-bottom: 3.5rem;
  overflow: hidden;
`;

const QuotationMark = styled.img`
  height: 5rem;
  width: 5rem;
  margin-top: -3.7rem;
  margin-left: -3rem;
  margin-bottom: 1.5rem;
  opacity: 0.04;
  position: absolute;
  z-index: 1;
`;

const ReviewText = styled.blockquote`
  font-weight: 300;
  font-size: 1rem;
  margin-bottom: 2rem;
  z-index: 2;
  position: relative;
`;

const ReviewUser = styled.figcaption`
  display: flex;
  align-items: center;
`;

const ReviewPhoto = styled.img`
  height: 4.5rem;
  width: 4.5rem;
  border-radius: 50%;
  margin-right: 1.5rem;
`;

const ReviewUserBox = styled.div`
  font-size: 1rem;
  margin-right: auto;
`;

const ReviewUserName = styled.p`
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 0.4rem;
`;

const ReviewUserDate = styled.p`
  font-size: 1rem;
  color: var(--color-grey-dark-3);
`;

const ReviewRating = styled.div`
  color: var(--color-primary);
  font-size: 2rem;
  font-weight: 300;
`;

const BtnInline = styled.button`
  ${BtnInlineStyle}
`;

UserReviews.propTypes = {};

export default UserReviews;
