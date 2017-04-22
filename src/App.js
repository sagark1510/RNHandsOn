import React from 'react';
import { StackNavigator } from 'react-navigation';
import Login from './Login';
import Home from './Home';
import Signup from './Signup';

const App = StackNavigator({
  Login: {
    screen: Login
  },
  Home: {
    screen: Home
  },
  Signup: {
    screen: Signup
  }
});

export default App;
