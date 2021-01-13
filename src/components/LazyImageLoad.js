import React, { lazy, Suspense } from 'react';
import { string } from 'prop-types';

/**
 * Component for Lazy loading images
 * @component
 * @param {object} props
 */
const LazyImageLoad = props => {
  const { thumbnail, src } = props;
  // using React lazy load feature to import Full image
  const FullImage = lazy(() => import('./FullImage'));
  return (
    // use react Suspense to render thumbnail
    <Suspense
      fallback={
        <div>
          <img style={{ width: '100%', height: 'auto' }} src={thumbnail} alt='Nike' />
        </div>
      }
    >
      {/* pass full image as prop to FullImage component */}
      <FullImage image={src} />
    </Suspense>
  );
};

LazyImageLoad.propTypes = {
  thumbnail: string,
  src: string,
};

LazyImageLoad.defaultProps = {
  thumbnail: null,
  src: null,
};

export default LazyImageLoad;
