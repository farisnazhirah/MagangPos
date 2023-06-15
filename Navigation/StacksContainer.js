import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  HeaderButton,
  HeaderButtons,
  Item,
} from 'react-navigation-header-buttons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
//SCREENS
import HomeScreen from '../Screens/HomeScreen';
import HelpScreen from '../Screens/HelpScreen';
import DiscussionScreen from '../Screens/DiscussionScreen'
import ProfileScreen from '../Screens/ProfileScreen';
import TabsContainer from './TabsContainer';

// header icon library
const CustomHeaderButton = props => (
  <HeaderButton {...props} IconComponent={Icon} iconSize={26} color="black" />
);
const Icon = props => (
  <MaterialIcons name="contact-support" size={props.size} color="white" />
);

const Stacks = createNativeStackNavigator();

const MainStacks = () => {
  return (
    <Stacks.Navigator>
      <Stacks.Screen
        name="Tabs"
        component={TabsContainer}
        options={{headerShown: false}}
      />
    </Stacks.Navigator>
  );
};

const HomeStacks = () => {
  return (
    <Stacks.Navigator>
      <Stacks.Screen
        name="HomeStack"
        component={HomeScreen}
        options={({navigation}) => ({
          headerRight: () => (
            <HeaderButtons
              HeaderButtonComponent={CustomHeaderButton}
              navigation>
              <Item
                iconName="help"
                onPress={() => navigation.navigate('BantuanStack')}
              />
            </HeaderButtons>
          ),
          title: 'Home',
          headerStyle: {
            backgroundColor: '#FF6700',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      />
      <Stacks.Screen
        name="BantuanStack"
        component={HelpScreen}
        options={{
          title: 'Bantuan',
          headerStyle: {
            backgroundColor: '#FF6700',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stacks.Screen
        name="DiscussionStack"
        component={DiscussionScreen}
        options={{
          title: 'Diskusi',
          headerStyle: {
            backgroundColor: '#FF6700',
          },
          headerTintColor: '#fff',
        }}></Stacks.Screen>
    </Stacks.Navigator>
  );
};

const ProfileStacks = () => {
  return (
    <Stacks.Navigator screenOptions={{headerShown: false}}>
      <Stacks.Screen
        name="ProfileStack"
        component={ProfileScreen}
        options={{title: 'Profile'}}
      />
    </Stacks.Navigator>
  );
};

export {HomeStacks, ProfileStacks, MainStacks};
