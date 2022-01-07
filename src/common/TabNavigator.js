import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DrawerNavigator from './DrawerNavigator';
import HomeScreen from '../navigation/HomeScreen';
import ChattingListScreen from '../navigation/ChattingListScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return(
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen options={{headerShown: false}} name='HomeScreen' component={HomeScreen} options={{tabBarLabel: '홈'}} />
            <Tab.Screen options={{headerShown: false}} name='ChattingListScreen' component={ChattingListScreen} options={{tabBarLabel: '채팅 목록'}} />
        </Tab.Navigator>
    );
}

export default TabNavigator;
