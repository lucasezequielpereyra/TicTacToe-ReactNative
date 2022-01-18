import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Styles } from './style';

const Square = ({ value, onClick }) => {
  const style = value;

  return (
    <TouchableOpacity onPress={() => onClick()} style={Styles.squares}>
      <Text style={[Styles.text, style === 'O' ? Styles.O : Styles.X]}>
        {value}
      </Text>
    </TouchableOpacity>
  );
};

export default Square;
