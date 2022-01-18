import React, { useState } from 'react';
import { SafeAreaView, View, StatusBar, StyleSheet } from 'react-native';
import Header from './src/components/molecules/header/index';
import GameScreen from './src/screens/gamescreen';
import GameStart from './src/screens/gamestart';

const App = () => {
  const handleTypeGame = type => {
    setTypeGame(type);
  };

  const [startGame, setStartGame] = useState(false);
  const [typeGame, setTypeGame] = useState('');

  let content = !startGame ? (
    <GameStart onChangeType={handleTypeGame} onChangeGame={setStartGame} />
  ) : (
    <GameScreen type={typeGame} onChangeGame={setStartGame} />
  );

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.container}>
        <StatusBar backgroundColor="#2B4570" barStyle="light-content" />
        <Header />
        {content}
      </View>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
