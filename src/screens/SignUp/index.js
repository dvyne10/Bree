import React, { useState } from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import FastImage from 'react-native-fast-image';
import { Button, StyledText, TappableText, TextInput } from '~/components';
import { AddPersonIcon, PhoneIcon } from '~/components/svgs';
import { createStackNavigator } from '@react-navigation/stack';

//screens
import Screen0ne from './ScreenOne';
import axiosInstance from '../../utils/axiosInstance';

const SignUpScreen = ({ navigation }) => {
  const [userName, setUserName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
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
              Welcome to Bree
            </StyledText>
            <StyledText
              size={12}
              color={'white'}
              style={{ textAlign: 'center', marginTop: 20 }}>
              This is an online system that makes you apply to schools without
              any hassle. Make the move to digital application.
            </StyledText>
          </View>
        </View>
        <View style={styles.body}>
          <TextInput
            containerStyleOverride={styles.textInputContainer}
            placeholder={'Username'}
            value={userName}
            onChangeText={setUserName}>
            <AddPersonIcon fill={'black'} width={20} height={20} />
          </TextInput>
          <TextInput
            containerStyleOverride={styles.textInputContainer}
            placeholder={'Phone number'}
            value={phoneNumber}
            onChangeText={setPhoneNumber}>
            <PhoneIcon fill={'black'} width={20} height={20} />
          </TextInput>
          <Button
            style={styles.button}
            onPress={() => {
              navigation.navigate('Screen0ne', {
                userName: userName,
                phoneNumber: phoneNumber,
              });
            }}>
            <Button.Text color={'white'}>Continue</Button.Text>
          </Button>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              display: 'flex',
              marginTop: 30,
            }}>
            <StyledText color={'black'} size={15} style={{}}>
              Existing User?
            </StyledText>
            <TappableText
              color={'black'}
              text={' Sign In'}
              onTap={() => {
                navigation.navigate('Screen0ne');
              }}
            />
          </View>
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
      marginTop: 15,
      borderColor: '#3eb2ff',
      height: 50,
    },
    body: {
      padding: 20,
    },
    button: {
      marginTop: 50,
      width: '50%',
      alignSelf: 'center',
    },
  });
};

const Stack = createStackNavigator();

const SignUpStack = () => {
  return (
    <>
      <Stack.Navigator initialRouteName="SignUpScreen">
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Screen0ne"
          component={Screen0ne}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </>
  );
};

export default SignUpStack;
