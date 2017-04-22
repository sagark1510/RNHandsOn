import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';

class Index extends Component {
  componentWillMount() {
    AsyncStorage.getItem('USER')
    .then(email => {
      let route = null;
      if (email !== null) {
        route = 'Home';
      } else {
        route = 'Login';
      }
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: route })
        ]
      });
      this.props.navigation.dispatch(resetAction);
    });
  }

  render() {
    return null;
  }
}

export default Index;
