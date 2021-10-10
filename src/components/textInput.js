import React, { Component } from 'react';
import { TextInput as Input, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const TextInput = ({
  multiLine,
  placeholderTextColor,
  inputStyle,
  placeholder,
  containerStyleOverride,
  children,
  ...rest
}) => {
  return (
    <View style={[styles.container, containerStyleOverride]}>
      {children}
      <Input
        multiline={multiLine}
        numberOfLines={multiLine ? 4 : 1}
        placeholderTextColor={placeholderTextColor}
        style={[styles.base, inputStyle]}
        placeholder={placeholder}
        {...rest}
      />
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    position: 'relative',
    borderWidth: 1,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
  },
  base: {
    paddingVertical: 5,
    fontSize: 16,
    fontFamily: 'Manrope-Regular',
    width: '100%',
    color: 'black',
  },
});

export default TextInput;
