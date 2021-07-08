import React from 'react';
import {createStackNavigator}
    from '@react-navigation/stack';
import Profile from './screens/Profile';
import ProfileDetail from './screens/ProfileDetail';

const Stack = createStackNavigator();
const screenOptionStyle = {
    headerShown: false
}

const HomeStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen
                name="Profile"
                component={Profile}
            />
            <Stack.Screen
                name="ProfileDetail"
                component={ProfileDetail}
            />
        </Stack.Navigator>
    )
}

export default HomeStackNavigator;
