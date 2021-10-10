import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';
import StyledText from './styledText';

const Button = ({
  width,
  height,
  onPress,
  disabled,
  activeOpacity,
  children,
  style,
  ...rest
}) => {
  const styles = EStyleSheet.create({
    base: {
      width,
      height: height,
      borderRadius: height / 2,
      display: 'flex',
      paddingHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      backgroundColor: '#3eb2ff',
    },
    disabled: {
      backgroundColor: '#C8CBCB',
    },
  });
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      {...rest}
      disabled={disabled}
      style={[styles.base, disabled && styles.disabled, style]}
      activeOpacity={activeOpacity}>
      {children}
    </TouchableOpacity>
  );
};

Button.Text = StyledText;

Button.defaultProps = {
  activeOpacity: 0.7,
  themeAware: true,
  height: 55,
};

export default Button;
