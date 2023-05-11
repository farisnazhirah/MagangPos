import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HeaderButton, HeaderButtons, Item } from 'react-navigation-header-buttons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
//SCREENS
import HomeScreen from '../Screens/HomeScreen';
import HelpScreen from '../Screens/HelpScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import TabsContainer from './TabsContainer';
import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';


// header icon library
const CustomHeaderButton = (props) => (
    <HeaderButton {...props} IconComponent={Icon} iconSize={24} color="black"></HeaderButton>
);
const Icon = props => (
  <MaterialIcons
    name="supervised-user-circle"
    size={props.size}
    color={props.color}
  />
);

const Stacks = createNativeStackNavigator();

const MainStacks = () => {
  return (
    <Stacks.Navigator>
      <Stacks.Screen name="LoginScreen" component={LoginScreen} options={{headerShown:false}}/>
      <Stacks.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: ''
        }}
      />

      {/* <Stacks.Screen name="Tabs" component={TabsContainer} /> */}
    </Stacks.Navigator>
  );
}

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
                title="help"
                iconName="help-circle"
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
    </Stacks.Navigator>
  );
}

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
}

export {HomeStacks, ProfileStacks, MainStacks};