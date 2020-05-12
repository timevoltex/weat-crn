import 'react-native-gesture-handler'
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Hometab, { Detail } from './Component/Hometab';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import GPS from './assets/svgicon/Gps_01.js';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Hometab} options={{
          headerTitle: "title",
          headerRight: () => (
            <GPS fill="#9948fc"/>
          ),
        }}/>
        <Stack.Screen name="Detail" component={Detail}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

