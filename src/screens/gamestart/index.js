import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { Styles } from './style';

const GameStart = ({ navigation }) => {
  const AlertNotFound = () =>
    Alert.alert('En desarrollo', 'Esta modalidad aun no esta disponible', [
      { text: 'OK' },
    ]);

  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>Elije el modo de juego</Text>
      <View style={Styles.containerButtons}>
        <TouchableOpacity
          style={Styles.customBtnBG}
          onPress={() => AlertNotFound()}>
          <Text style={Styles.customBtnText}>VS. IA</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.customBtnBG}
          onPress={() => navigation.navigate('Game Screen')}>
          <Text style={Styles.customBtnText}>VS. Player</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GameStart;
