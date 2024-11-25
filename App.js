import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';

// Import your screens
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';

// Stack navigator
const Stack = createStackNavigator();

// Bottom Tab navigator
const Tab = createBottomTabNavigator();

// Drawer navigator
const Drawer = createDrawerNavigator();

// Home Tab
function HomeTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

// Stack navigator for the app
function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeTab} />
    </Stack.Navigator>
  );
}

// Drawer navigator containing the AppStack and other screens
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={AppStack} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
