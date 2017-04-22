import React, { Component } from 'react';
import { View, Text, Button, AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';
import LogoutButton from './LogoutButton';

class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    headerRight: <LogoutButton navigation={navigation} />
  })

  logout() {
    alert("Logout");
  }

  render() {
    return(
      <View>
        <Text>Home Page</Text>
      </View>
    );
  }
}

export default Home;
