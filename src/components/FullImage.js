import React from 'react';
import { string } from 'prop-types';

/**
 * component to render full image
 * @component
 * @param {object} props
 */
const FullImage = props => {
  const { image } = props;
  return <img style={{ width: '100%', height: 'auto' }} src={image} alt='Nike' />;
};

FullImage.propTypes = {
  image: string,
};

FullImage.defaultProps = {
  image: null,
};

export default FullImage;
