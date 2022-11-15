import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { Screen, Navigator } = createBottomTabNavigator();

import { Home } from '../screens/Home';
import { Perfil } from '../screens/Perfil';
import { CreateError } from '../screens/CreateError';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHomeUser } from '@fortawesome/sharp-solid-svg-icons/faHomeUser'
import { faUserCircle } from '@fortawesome/sharp-solid-svg-icons/faUserCircle'

export default function TabRoutes() {

  return (
    <Navigator initialRouteName="Login"
      screenOptions={{
        tabBarActiveTintColor: '#FF4B26',
        tabBarInactiveTintColor: '#FFFFFF',
        headerShown: false,
        tabBarActiveBackgroundColor: '#585666',
        tabBarInactiveBackgroundColor:'#585666',
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={ faHomeUser } size={25} color={ 'white' } />
          )
        }}
      />
      <Screen
        name="CreateError"
        component={CreateError}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={ faHomeUser } size={25} color={ 'white' } />
          )
        }}
      />
      <Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={ faUserCircle } size={25} color={ 'white' } />
          )
        }}
      />
    </Navigator>
  );
}
