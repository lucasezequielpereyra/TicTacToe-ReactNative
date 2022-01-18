import React from 'react';
import { View } from 'react-native';
import Square from '../../atoms/square/index';
import { Styles } from './style';

const Board = ({ squares, onClick }) => (
  <View style={Styles.container}>
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </View>
);

export default Board;
