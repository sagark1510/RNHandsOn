import React, { Component } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet } from 'react-native';

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
      <View style={styles.container}>
        <View style={styles.loginBox}>
          <Text>Login</Text>
          <Image
            source={{ uri: 'https://placehold.it/100x100' }}
            style={{ height: 100, width: 100 }}
          />
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            style={styles.inputText}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.inputText}
          />
          <Button
            title="Login"
            onPress={() => {}}
          />
        </View>
        <View style={styles.signupBox}>
          <Button
            title="Sign up"
            onPress={() => {}}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputText: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10
  },
  loginBox: {
    flex: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20
  },
  signupBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    marginTop: 20,
    flex: 1
  }
})

export default App;
