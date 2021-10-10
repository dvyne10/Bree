import React, { useEffect } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { StyledText } from '~/components';
import { StackActions } from '@react-navigation/native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SignInScreen');
    }, 2000);
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
        }}>
        <StyledText fontFamily={'Manrope-Bold'} size={52} color={'#3EB2FF'}>
          Bree
        </StyledText>
      </View>
    </>
  );
};

export default SplashScreen;
