import React, { Component } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet } from 'react-native';

// ES6 Class feature
class Login extends Component {
  static navigationOptions = {
    title: 'Login Page'
  }
  // Only Required LifeCycle method by component
  render() {
    const { navigate } = this.props.navigation;
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
            underlineColorAndroid="transparent"
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.inputText}
            underlineColorAndroid="transparent"
          />
          <Button
            title="Login"
            onPress={() => navigate('Home') }
          />
        </View>
        <View style={styles.signupBox}>
          <Button
            title="Sign up"
            onPress={() => navigate('Signup')}
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
    paddingHorizontal: 10,
    width: '100%',
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
    paddingTop: 20,
    flex: 1
  }
})

export default Login;
