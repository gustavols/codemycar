import React, { useEffect, useState } from 'react';

import { ThemeProvider } from 'styled-components/native';
import light from './src/theme/light';

import Navigation from './src/routes/stack';
import TabRoutes from './src/routes/routes';

import { NavigationContainer } from '@react-navigation/native';

import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

export default function App(){
  const [user, setUser] = useState<FirebaseAuthTypes.User>();

  useEffect(() => {
    const subscriber = auth()
      .onAuthStateChanged(response => {
        setUser(response);
      });

    return subscriber;
  }, []);

  
  return (
      <ThemeProvider theme={light}>
        <NavigationContainer>
        <Navigation/>
        </NavigationContainer>  
      </ThemeProvider>    
  );
}

