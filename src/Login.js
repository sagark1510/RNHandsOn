import React, { Component } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet, Alert, AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';


// ES6 Class feature
class Login extends Component {
  static navigationOptions = {
    title: 'Login Page'
  }

  state = {
    email: null,
    password: null
  }

  onLoginPress() {
    const { email, password } = this.state;
    const { navigate } = this.props.navigation;
    if (email === 'joy@gmail.com' && password === 'joy') {
      AsyncStorage.setItem('USER', email)
      .then(() => {
        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Home' })
          ]
        });
        this.props.navigation.dispatch(resetAction);
      });
    } else {
      Alert.alert("Error", "Please enter valid email & Password")
    }
  }

  // Only Required LifeCycle method by component
  render() {
    console.log(this.state);
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
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            style={styles.inputText}
            underlineColorAndroid="transparent"
            onChangeText={value => this.setState({ email: value })}
            value={this.state.email}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.inputText}
            underlineColorAndroid="transparent"
            onChangeText={value => this.setState({ password: value })}
            value={this.state.password}
            onSubmitEditing={this.onLoginPress.bind(this)}
          />
          <Button
            title="Login"
            onPress={this.onLoginPress.bind(this)}
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
