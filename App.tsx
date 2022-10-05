import { ThemeProvider } from 'styled-components/native';
import { Home } from './src/screens/Home';
import { Login } from './src/screens/Login';

import light from './src/theme/light';

export default function App(){
  return (
    <ThemeProvider theme={light}>
        <Home />
    </ThemeProvider>
  );
}
