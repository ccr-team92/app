import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Home from '../pages/HomeScreen';
import WelcomeScreen from '../pages/WelcomeScreen';

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator 
        screenOptions={{ 
          headerShown: false, 
          cardStyle: { backgroundColor: '#F2F3F5' }
        }}>
        <Screen 
          name="Welcome Screen" 
          component={WelcomeScreen} 
        />

        <Screen 
          name="Login" 
          component={Login}
        />

        <Screen 
          name="Signup" 
          component={Signup}
        />

        <Screen 
          name="Home" 
          component={Home}
        />

      </Navigator>
    </NavigationContainer>
  );
}