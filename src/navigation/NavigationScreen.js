import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, LoginScreen, RegisterScreen} from '@screens';

const Stack = createNativeStackNavigator();

const NavigationScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{headerLeft: null}}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationScreen;
