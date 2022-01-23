import React, { useState } from 'react';
import Board from '../../components/molecules/board/index';
import { View, Text, TouchableOpacity } from 'react-native';
import { calculateWinner } from '../../components/utils/helpers';
import { Styles } from './style';

const GameScreen = ({ navigation }) => {
  const [board, setBoard] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board[stepNumber]);
  let xO = xIsNext ? 'X' : 'O';

  const handleClick = i => {
    const boardPoint = board.slice(0, stepNumber + 1);
    const current = boardPoint[stepNumber];
    const squares = [...current];

    if (winner || squares[i]) {
      return;
    }

    squares[i] = xO;
    setBoard([...boardPoint, squares]);
    setStepNumber(boardPoint.length);
    setXisNext(!xIsNext);
  };

  return (
    <View style={Styles.container}>
      <Board squares={board[stepNumber]} onClick={handleClick} />
      <Text style={[Styles.turn, winner && Styles.winner]}>
        {winner ? `Ganador Jugador "${winner}" !!` : `Siguiente Jugador: ${xO}`}
      </Text>
      <View style={Styles.btnContainer}>
        <TouchableOpacity
          style={Styles.customBtnBG}
          onPress={() => {
            setStepNumber(0);
          }}>
          <Text style={Styles.customBtnText}>Restear</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.customBtnBG}
          onPress={() => navigation.navigate('Game Start')}>
          <Text style={Styles.customBtnText}>Volver</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GameScreen;
