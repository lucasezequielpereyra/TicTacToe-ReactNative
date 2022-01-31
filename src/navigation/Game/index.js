import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GameStart from '../../screens/gamestart/index';
import GameScreen from '../../screens/gamescreen/index';

const Stack = createNativeStackNavigator();

const GameNavigation = () => {
  return (
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
  );
};

export default GameNavigation;
