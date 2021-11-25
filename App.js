import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { DevicesScreen, HomeScreen } from './src/screens';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors, Spacing } from './src/styles';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={Colors.main.light}
      inactiveColor={Colors.main.dark}
      barStyle={{ backgroundColor: Colors.main.primary }}

    >
      <Tab.Screen name="Home" component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }} />

      <Tab.Screen name="Devices" component={DevicesScreen}
        options={{
          tabBarLabel: "Devices",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="format-list-bulleted" color={color} size={26} />
          ),
        }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>

  );
}
