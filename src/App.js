import React, { Component } from 'react';
import { View, Text, Image, TextInput, Button } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={{ marginTop: 20 }}>
        <Text>Login</Text>
        <Image
          source={{ uri: 'https://placehold.it/100x100' }}
          style={{ height: 100, width: 100 }}
        />
        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          style={{ height: 40 }}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={{ height: 40 }}
        />
        <Button
          title="Login"
        />
      </View>
    );
  }
}

export default App;
