import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import GameStart from '../screens/gamestart/index';
import GameScreen from '../screens/gamescreen/index';
import Header from '../components/molecules/header/index';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#2B4570" barStyle="light-content" />
      <Header />
      <Stack.Navigator initialRouteName="Game Start">
        <Stack.Screen
          name="Game Start"
          component={GameStart}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Game Screen"
          component={GameScreen}
          options={{
            title: 'Player vs Player',
            headerStyle: {
              backgroundColor: '#7180AC',
            },
            headerTintColor: '#FFFFFF',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
