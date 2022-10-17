import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const { Screen, Navigator } = createBottomTabNavigator();

import { Home } from '../screens/Home';
import { Perfil } from '../screens/Perfil';
import { SearchError } from '../screens/SearchError';

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
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5
              name="home"
              color={color}
              size={size}
            />
          )
        }}
      />
      <Screen
        name="SearchError"
        component={SearchError}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5
              name="home"
              color={color}
              size={size}
            />
          )
        }}
      />
      <Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5
              name="user"
              color={color}
              size={size}
            />
          )
        }}
      />
    </Navigator>
  );
}