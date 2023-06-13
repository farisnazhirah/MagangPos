import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthContainer from './AuthContainer';
import useAuthStore from '../State/AuthStore';
import { MainStacks } from './StacksContainer';

const MainContainer = () => {
  const {isLoggedIn} = useAuthStore()

  return (
    <NavigationContainer>
      {isLoggedIn ? <MainStacks/> : <AuthContainer />}
    </NavigationContainer>
  );
};

export default MainContainer;
