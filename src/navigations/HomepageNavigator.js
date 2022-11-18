import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Notification from '../screens/Notification';
import Profile from '../screens/Profile';
import React from 'react';
import * as Icons from 'react-native-heroicons/solid';
const Tab = createBottomTabNavigator();
import COLOR from '../contains/pallete';

function HomepageTab() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: COLOR.primary,
        tabBarIcon: ({color = 'red', size, focused}) => {
          let IconName;
          if (route.name === 'Home') {
            return <Icons.HomeIcon color={color} />;
          } else if (route.name === 'Notification') {
            return <Icons.BellIcon color={color} />;
          } else if (route.name === 'Profile') {
            return <Icons.UserCircleIcon color={color} />;
          }
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default HomepageTab;
