import React from 'react';
import { View, Text } from 'react-native';
import { Styles } from './style';

const Header = ({ title }) => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>tic tac toe</Text>
    </View>
  );
};

export default Header;
