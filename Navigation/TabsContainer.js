import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStacks, ProfileStacks } from './StacksContainer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Tabs = createBottomTabNavigator();
const TabsContainer = () => {
    return (
        <Tabs.Navigator 
            initialRouteName='HomeTab'
            screenOptions={({ route }) => (
                { tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'HomeTab') {
                        iconName = focused
                        ? 'home'
                        : 'home-outline';
                    } else if (route.name === 'ProfileTab') {
                        iconName = focused 
                        ? 'person'
                        : 'person-outline';
                    }
                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                headerShown: false
                })
            }>     
            <Tabs.Screen name="HomeTab" component={HomeStacks} 
                options={({ route }) => ({ 
                    tabBarStyle: {display:getRouteName(route)},
                    tabBarLabel: "Home"
                })}/>
            <Tabs.Screen name="ProfileTab" component={ProfileStacks} options={{ tabBarLabel: "Profile"}}/>
                </Tabs.Navigator>
    )
}

const getRouteName = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route)
    if (routeName?.includes("Bantuan")){
        return 'none'
    }
    return 'flex'

}
    



export default TabsContainer