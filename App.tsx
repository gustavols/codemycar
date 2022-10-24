import React from 'react';

import { ThemeProvider } from 'styled-components/native';
import light from './src/theme/light';

import Navigation from './src/routes/stack';
import TabRoutes from './src/routes/routes';

import { NavigationContainer } from '@react-navigation/native';

export default function App(){
  return (
      <ThemeProvider theme={light}>
        <NavigationContainer>
            <Navigation/>
        </NavigationContainer>  
      </ThemeProvider>    
  );
}

