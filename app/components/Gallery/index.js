/**
 *
 * Gallery
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import hotel1 from '../../images/hotel-1.jpg';
import hotel2 from '../../images/hotel-2.jpg';
import hotel3 from '../../images/hotel-3.jpg';

function Gallery() {
  return (
    <Div>
      <GalleryItem>
        <GalleryPhoto src={hotel1} alt="Photo of hotel 1" />
      </GalleryItem>
      <GalleryItem>
        <GalleryPhoto src={hotel2} alt="photo of hotel 2" />
      </GalleryItem>
      <GalleryItem>
        <GalleryPhoto src={hotel3} alt="photo of hotel 3" />
      </GalleryItem>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
`;

const GalleryItem = styled.figure``;

const GalleryPhoto = styled.img`
  width: 100%;
  display: block;
`;

Gallery.propTypes = {};

export default Gallery;
