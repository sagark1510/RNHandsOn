import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './Login';
import Home from './Home';
import Signup from './Signup';
import Index from './Index';

const App = StackNavigator({
  Login: {
    screen: Login
  },
  Signup: {
    screen: Signup
  },
  Home: {
    screen: Home
  },
  Index: {
    screen: Index
  }
}, {
  initialRouteName: 'Index'
});

export default App;
