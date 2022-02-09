import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import GameNavigation from './Game/index';
import ProfileNavigation from './Profile/index';

const BottomTabs = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <BottomTabs.Navigator
        initialRouteName="Game"
        screenOptions={{
          headerShown: false,
        }}>
        <BottomTabs.Screen
          name="Game"
          component={GameNavigation}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons name="game-controller-sharp" size={20} />
            ),
          }}
        />
        <BottomTabs.Screen
          name="Profile"
          component={ProfileNavigation}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons name="home-sharp" size={20} />
            ),
          }}
        />
      </BottomTabs.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
