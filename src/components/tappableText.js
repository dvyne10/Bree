import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

// component
import StyledText from './styledText';

const TappableText = ({
  onTap,
  containerStyleOverride,
  activeOpacity,
  text,
  ...rest
}) => {
  return (
    <TouchableOpacity
      onPress={() => onTap()}
      style={{ ...containerStyleOverride }}
      activeOpacity={activeOpacity}>
      <StyledText fontFamily={'Manrope-Bold'} {...rest}>
        {text}{' '}
      </StyledText>
    </TouchableOpacity>
  );
};

TappableText.propTypes = {
  text: PropTypes.string.isRequired,
  onTap: PropTypes.func.isRequired,
  containerStyleOverride: PropTypes.shape({}),
  activeOpacity: PropTypes.number,
};

TappableText.defaultProps = {
  activeOpacity: 0.5,
};

export default TappableText;
