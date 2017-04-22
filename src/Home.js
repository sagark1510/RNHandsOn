import React, { Component } from 'react';
import { View, Text, Button, AsyncStorage, FlatList, Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';
import LogoutButton from './LogoutButton';

class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    headerRight: <LogoutButton navigation={navigation} />
  })

  _keyExtractor = (item, index) => item.id;

  state = {
    list: []
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(response => {
      this.setState({ list: response });
      console.log(response);
    }).catch(error => {
      this.setState({ list: [] });
      Alert.alert("Error loading", "Something went wrong");
    });
  }

  renderItem = ({ item, index }) => {

    return (
      <View style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ccc' }}>
        <Text style={{ fontSize: 14, color: 'black' }}>{item.name}</Text>
      </View>
    );
  }

  render() {
    return(
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.list}
          renderItem={this.renderItem}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}

export default Home;
