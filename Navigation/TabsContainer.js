import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStacks, ProfileStacks} from './StacksContainer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

const Tabs = createBottomTabNavigator();

//TabBar Icon config
const getTabBarIcon = (route, focused, color, size) => {
  let iconName;
  if (route.name === 'HomeTab') {
    iconName = focused ? 'home' : 'home-outline';
  } else if (route.name === 'ProfileTab') {
    iconName = focused ? 'person' : 'person-outline';
  }
  // You can return any component that you like here!
  return <Ionicons name={iconName} size={size} color={color} />;
};
const getTabBarOptions = () => {
  return {
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
    headerShown: false,
  };
};

const TabsContainer = () => {
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) =>
          getTabBarIcon(route, focused, color, size),
        ...getTabBarOptions(),
      })}>
      <Tabs.Screen
        name="HomeTab"
        component={HomeStacks}
        options={({route}) => ({
          tabBarStyle: {display: getRouteName(route)},
          tabBarLabel: 'Home',
        })}
      />
      <Tabs.Screen
        name="ProfileTab"
        component={ProfileStacks}
        options={{tabBarLabel: 'Profile'}}
      />
    </Tabs.Navigator>
  );
};

//Hiding Tab Nav on a specific stack screen
const getRouteName = route => {
  const routeName = getFocusedRouteNameFromRoute(route);
  if (routeName?.includes('Bantuan') || routeName?.includes('Discussion')) {
    return 'none';
  }
  return 'flex';
};

export default TabsContainer;
