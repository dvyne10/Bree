import 'react-native-gesture-handler';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import EStyleSheet from 'react-native-extended-stylesheet';
import RootNavigator from '~/navigation/AuthFlow';
import DrawerNavigation from '~/navigation/DrawerNavigation';
import AuthContext from './src/context/authContext';
import RootNavigation from './src/navigation/RootNavigation';

EStyleSheet.build({
  // always call EStyleSheet.build() even if you don't use global variables!
});

const App = () => {
  return (
    <AuthContext.ProviderWrapper>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </AuthContext.ProviderWrapper>
  );
};

export default App;
