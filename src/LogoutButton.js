import React from 'react';
import { Button, AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';

const LogoutButton = ({ navigation }) => {
  return (
    <Button
      title="Logout"
      onPress={() => {
        AsyncStorage.removeItem('USER').then(() => {
          const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({ routeName: 'Login' })
            ]
          });
          navigation.dispatch(resetAction);
        });
      }}
    />
  );
}

export default LogoutButton;
