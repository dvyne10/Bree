import React, { useContext } from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import FastImage from 'react-native-fast-image';
import { FlipInEasyX } from 'react-native-reanimated';
import { Button, StyledText, TappableText, TextInput } from '~/components';
import {
  AddPersonIcon,
  PasswordIcon,
  PersonIcon,
  PhoneIcon,
} from '~/components/svgs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from '~/context/authContext';

const OtpScreen = ({ navigation, route }) => {
  const { setToken } = useContext(AuthContext);
  const { token } = route.params;
  const styles = generateStyles();
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <FastImage
            source={require('#/images/chad-madden.jpg')}
            style={{
              width: '100%',
              height: '100%',
              borderBottomRightRadius: 50,
              borderBottomLeftRadius: 50,
            }}
          />
          <View style={styles.gradient} />
          <View style={styles.content}>
            <StyledText
              style={{ textAlign: 'center', marginTop: 50 }}
              size={30}
              color={'white'}>
              Ready To Find a School
            </StyledText>
            <StyledText
              size={12}
              color={'white'}
              style={{ textAlign: 'center', marginTop: 20 }}>
              Apply online to quickly join schools that will help you learn the
              cutting-edge skills to scale new heights in your new creative
              career
            </StyledText>
          </View>
        </View>
        <View style={styles.body}>
          <View>
            <StyledText
              style={{ textAlign: 'center' }}
              fontFamily={'Manrope-SemiBold'}>
              Enter One Time Password
            </StyledText>
            <StyledText
              style={{ textAlign: 'center', marginTop: 10 }}
              size={12}>
              A verification code has been sent to your email and phone number
            </StyledText>
          </View>
          <View style={styles.otpContainer}>
            {Array.from({ length: 4 }).map((item, index) => {
              return (
                <View key={index} style={styles.otp}>
                  <TextInput
                    containerStyleOverride={styles.textInputContainer}
                  />
                </View>
              );
            })}
          </View>
          <Button
            style={styles.button}
            onPress={async () => {
              await AsyncStorage.setItem('token', token);
              setToken(token);
              setTimeout(() => {
                navigation.navigate('BottomTabNavigator');
              }, 500);
            }}>
            <Button.Text color={'white'}>Verify</Button.Text>
          </Button>
        </View>
      </View>
    </>
  );
};

const generateStyles = () => {
  return EStyleSheet.create({
    wrapper: {
      height: '100%',
      width: '100%',
    },
    header: {
      height: '40%',
      borderBottomRightRadius: 50,
      borderBottomLeftRadius: 50,
    },
    gradient: {
      height: '100%',
      width: '100%',
      zIndex: 1,
      backgroundColor: 'rgba(0, 82, 227,0.5)',
      position: 'absolute',
      borderBottomRightRadius: 50,
      borderBottomLeftRadius: 50,
    },
    content: {
      position: 'absolute',
      zIndex: 2,
      alignContent: 'center',
      justifyContent: 'center',
      padding: 50,
    },
    textInputContainer: {
      backgroundColor: 'white',
      width: 50,
      height: 50,
      borderRadius: 15,
      borderColor: '#3eb2ff',
    },
    body: {
      padding: 20,
    },
    button: {
      marginTop: 50,
      width: '50%',
      alignSelf: 'center',
    },
    otp: {
      width: 50,
      height: 50,
      borderRadius: 15,
      borderColor: '#3eb2ff',
      borderWidth: 1,
    },
    otpContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 50,
      marginTop: 50,
    },
  });
};

export default OtpScreen;
