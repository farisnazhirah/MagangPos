import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';

const AuthStack = createNativeStackNavigator();

const AuthContainer = () => {

  return (
    <AuthStack.Navigator >
      <AuthStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: '',
        }}
      />
    </AuthStack.Navigator>
  );
}

export default AuthContainer