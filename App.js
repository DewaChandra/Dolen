import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/Navigator/Router';
import { Register } from './src/assets/screens';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;