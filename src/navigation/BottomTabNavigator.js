import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ApplicationIcon, HomeIcon } from '~/components/svgs';

//screens
import { ApplicationStack, HomeScreen } from '~/screens';

const Tab = createBottomTabNavigator();

const TabBarIcon = ({ name, focused }) => {
  let Icon;

  switch (true) {
    case name === 'Home':
      Icon = <HomeIcon fill={focused ? '#3eb2ff' : 'white'} />;
      break;

    default:
      Icon = <ApplicationIcon fill={focused ? '#3eb2ff' : 'white'} />;
      break;
  }

  return <>{Icon}</>;
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleAlign: 'center',
        style: {
          borderTopWidth: 0,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.15,
          shadowRadius: 5.84,
          elevation: 10,
          backgroundColor: 'white',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={({ route }) => ({
          tabBarIcon: props => <TabBarIcon {...props} name={route.name} />,
          tabBarShowLabel: false,
          headerTitle: '',
        })}
      />
      <Tab.Screen
        name="Application"
        component={ApplicationStack}
        options={({ route }) => ({
          tabBarIcon: props => <TabBarIcon {...props} name={route.name} />,
          tabBarShowLabel: false,
          headerTitle: '',
        })}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
