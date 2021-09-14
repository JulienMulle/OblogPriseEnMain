import React from 'react';
import Lottie from 'react-lottie';
import PropTypes from 'prop-types';

export default function LottieAnimation({ lotti, width, height }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lotti,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={height} width={width} />
    </div>
  );
}

LottieAnimation.propTypes = {
  lotti: PropTypes.object.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};

LottieAnimation.defaultProps = {
  width: 50,
  height: 50,
};