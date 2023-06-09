import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import NextScreen from './NextScreen';
import DynamicPage from './DynamicPage';


const Stack = createStackNavigator();

const App = () => {
  return (
   
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="NextScreen" component={NextScreen} />
        <Stack.Screen name="DynamicPage" component={DynamicPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;