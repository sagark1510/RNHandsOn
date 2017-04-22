import React, { Component } from 'react';
import { View, Text, Image, TextInput, Button } from 'react-native';

// ES6 Class feature
class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }

  // Component LifeCycle method
  componentDidMount() {

    // Arrow Function
    setInterval(() => {
      //ES6 Object desctructuring
      const { counter } = this.state;

      // Re-render using this.setState
      this.setState({
        counter: counter + 1
      });
    }, 1000);
  }

  // Only Required LifeCycle method by component
  render() {
    return (
      <View style={{ marginTop: 20 }}>
        <Text>{this.state.counter}</Text>
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
