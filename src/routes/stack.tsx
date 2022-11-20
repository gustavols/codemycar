import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Routes from '../routes/routes';
import { Welcome } from '../screens/Welcome/index';
import {Login} from '../screens/Login/index';
import { Register } from '../screens/Register/index';
import { Home } from '../screens/Home/index';
import { CreateError } from '../screens/CreateError/index';
import { EditError } from '../screens/EditError/index';
import { Perfil } from '../screens/Perfil/index';
import { SearchError } from '../screens/SearchError/index';


import { propsNavigationStack } from './Models';

const { Navigator, Screen} = createNativeStackNavigator<propsNavigationStack>()

export default function Navigation() {

  return (
      <Navigator>
            <Screen name="Welcome" component={Welcome} options={{ headerShown: false }}/>
            <Screen name="Login" component={Login} options={{ headerShown: false }}/>
            <Screen name="Main" component={Routes} options={{ headerShown: false}} />
            <Screen name="SearchError" component={SearchError} options={{ headerShown: false}} />
            <Screen name="Register" component={Register} options={{ headerShown: false }}/>
            <Screen name="Home" component={Home} options={{ headerShown: false }}/>
            <Screen name="CreateError" component={CreateError} options={{ headerShown: false }}/>
            <Screen name="EditError" component={EditError} options={{ headerShown: false }}/>
            <Screen name="Perfil" component={Perfil} options={{ headerShown: false }}/>   
      </Navigator>
  )
}