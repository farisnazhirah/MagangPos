import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainStacks} from './StacksContainer';
import AuthContainer from './AuthContainer';
import {onAuthStateChanged} from 'firebase/auth';
import {FIREBASE_auth} from '../Config/FirebaseConfig';

const auth = FIREBASE_auth;

const MainContainer = () => {
  return (
    <NavigationContainer>
      {/* <MainStacks/> */}
      <AuthContainer />
    </NavigationContainer>
  );
};

export default MainContainer;
