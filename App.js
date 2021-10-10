import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import EStyleSheet from 'react-native-extended-stylesheet';
import RootNavigator from '~/navigation';
import DrawerNavigation from '~/navigation/DrawerNavigation';

EStyleSheet.build({
  // always call EStyleSheet.build() even if you don't use global variables!
});

const App = () => {
  return (
    <NavigationContainer>
      {/* <RootNavigator /> */}
      <DrawerNavigation />
    </NavigationContainer>
  );
};

export default App;
