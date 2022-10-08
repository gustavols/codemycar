import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const { Screen, Navigator } = createBottomTabNavigator();

import { Home } from '../screens/Home';
import { Login } from '../screens/Login';

export default function TabRoutes() {
  return (
    <Navigator initialRouteName='Home'
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
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5
              name="truck-pickup"
              color={color}
              size={size}
            />
          )
        }}
      />
      <Screen
        name="Login"
        component={Login}
        options={{
          tabBarLabel: 'Login',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5
              name="angle-up"
              color={color}
              size={size}
            />
          )
        }}
      />
    </Navigator>
  );
}