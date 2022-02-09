import React from 'react';
import { StatusBar } from 'react-native';
import Header from './src/components/molecules/header/index';
import AppNavigation from './src/navigation/index';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#2B4570" barStyle="light-content" />
      <Header />
      <AppNavigation />
    </>
  );
};

export default App;
