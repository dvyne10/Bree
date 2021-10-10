import React, { Component } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';

const StyledText = ({
  color,
  size,
  fontFamily,
  isOneLine,
  children,
  style,
  ...rest
}) => {
  const styles = EStyleSheet.create({
    text: {
      fontSize: size,
      color: color,
      fontFamily: fontFamily,
    },
  });
  return (
    <Text
      numberOfLines={isOneLine ? 1 : 0}
      style={[styles.text, style]}
      {...rest}>
      {children}
    </Text>
  );
};

StyledText.propTypes = {
  size: PropTypes.number,
  fontFamily: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.array]),
  color: PropTypes.string,
  isOneLine: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

StyledText.defaultProps = {
  color: 'black',
  fontFamily: 'Manrope-Medium',
  style: {},
  size: 16,
  isOneLine: false,
};

export default StyledText;
