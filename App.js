/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  
  View,
} from 'react-native';

import {Home,Sessions} from './src/screens'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {options} from './src/Navigation/NavigationHeader'
import { 
  Provider 
} from 'react-redux'
import { 
  PersistGate 
} from 'redux-persist/integration/react'
import { 
  store, 
  persistor 
} from "./src/redux";
const Stack = createStackNavigator();
const App: () => React$Node = () => {
  return (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
    <View style={{flex:1}}>
      <NavigationContainer>
      
          <Stack.Navigator screenOptions={options}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Sessions" component={Sessions} />
          </Stack.Navigator>
        
      </NavigationContainer>
</View>
</PersistGate>
</Provider>
  );
};


export default App;
