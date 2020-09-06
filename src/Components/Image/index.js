import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';

import * as S from './styled';

const LazyLoadImage = ({ src, alt }) => {
  const refPlaceholder = useRef();
  
  
  const removePlaceholder = () => {
    refPlaceholder.current.remove();
  }

  return (
    <S.ImageWrapper>
      <S.Placeholder ref={refPlaceholder} />
      <LazyLoad>
        <S.LazyImage 
          onLoad={removePlaceholder}
          onError={removePlaceholder}
          src={src}
          alt={alt}
        />
      </LazyLoad>
    </S.ImageWrapper>
  )
}
LazyLoadImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
}


export default LazyLoadImage;