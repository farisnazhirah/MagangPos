import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainStacks } from './StacksContainer';

const MainContainer = () => {
    return (
        <NavigationContainer>
            <MainStacks/>
        </NavigationContainer>
    );
}

export default MainContainer