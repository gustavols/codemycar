import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Routes from '../routes/routes';

import {Login} from '../screens/Login/index';

import {Register} from '../screens/Register/index';

import {Home} from '../screens/Home/index';

import {Perfil} from '../screens/Perfil/index';

import { SearchError } from '../screens/SearchError/index';

import { propsNavigationStack } from './Models';

const { Navigator, Screen} = createNativeStackNavigator<propsNavigationStack>()

export default function Navigation() {

  return (
      <Navigator>
            <Screen name="Login" component={Login} options={{ headerShown: false }}/>
            <Screen name="Main" component={Routes} options={{ headerShown: false}} />
            <Screen name="SearchError" component={SearchError} options={{ headerShown: false}} />
            <Screen name="Register" component={Register} options={{ headerShown: false }}/>
            <Screen name="Home" component={Home} options={{ headerShown: false }}/>
            <Screen name="Perfil" component={Perfil} options={{ headerShown: false }}/>   
      </Navigator>
  )
}