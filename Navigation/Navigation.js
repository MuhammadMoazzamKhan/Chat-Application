import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Welcome from '../screens/Welcome';
import Authentication from '../screens/Authentication';
import OTP from '../screens/OTP';
import Profile from '../screens/Profile';
import BottomTabNavigator from './BottomTap';
import Chat from '../screens/Chat';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Authentication' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeTab" options={{ headerShown: false }} component={BottomTabNavigator} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Authentication" component={Authentication} />
        <Stack.Screen name="OTP" component={OTP} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Chat" component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;