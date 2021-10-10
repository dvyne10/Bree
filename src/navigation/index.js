import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';

//Screens
import {
  SplashScreen,
  SignInScreen,
  SignUpStack,
  OtpScreen,
  HomeScreen,
} from '~/screens';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUpStack"
          component={SignUpStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OtpScreen"
          component={OtpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
        {/* <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        /> */}
      </Stack.Navigator>
    </>
  );
};

export default RootNavigator;
