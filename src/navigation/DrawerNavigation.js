import React, { Component } from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { View } from 'react-native';
import { StyledText } from '~/components';
import {
  ApplicationStack,
  EligibilityStack,
  HomeScreen,
  SettingsStack,
} from '~/screens';
import BottomTabNavigator from './BottomTabNavigator';
import EStyleSheet from 'react-native-extended-stylesheet';
import { EditPencil } from '~/components/svgs';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ padding: 10 }}>
        <StyledText size={18}>My Profile</StyledText>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <View style={styles.imageContainer}></View>
          <StyledText style={{ width: 100 }} size={20}>
            Bree Doe
          </StyledText>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={styles.editPencil}>
              <EditPencil />
            </View>
          </View>
        </View>
        <StyledText style={{ marginTop: 10 }} size={18}>
          Menu
        </StyledText>
      </View>
      <DrawerItemList {...props} />
      <View style={{ padding: 20 }}>
        <StyledText size={12}>Log Out</StyledText>
      </View>
    </DrawerContentScrollView>
  );
}

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="BottomTabNavigator"
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      <Drawer.Screen name="EligibilityStack" component={EligibilityStack} />
      <Drawer.Screen name="ApplicationStack" component={ApplicationStack} />
      <Drawer.Screen name="SettingsStack" component={SettingsStack} />
    </Drawer.Navigator>
  );
};

const styles = EStyleSheet.create({
  imageContainer: {
    borderWidth: 2,
    borderColor: '#3eb2ff',
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editPencil: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#3eb2ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DrawerNavigation;
