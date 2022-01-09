import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DrawerNavigator from './DrawerNavigator';
import HomeScreen from '../navigation/HomeScreen';
import ChattingListScreen from '../navigation/ChattingListScreen';
import FriendListScreen from '../navigation/FriendListScreen';
import ProfileScreen from '../navigation/ProfileScreen';

import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return(
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen options={{headerShown: false}} name='HOME' component={HomeScreen} options={{tabBarIcon: () => (<Icon name="ios-home-outline" size={25}/>)}} />
            <Tab.Screen options={{headerShown: false}} name='CHAT' component={ChattingListScreen} options={{tabBarIcon: () => (<Icon name="chatbubbles-outline" size={25}/>)}} />
            <Tab.Screen options={{headerShown: false}} name='FRIEND' component={FriendListScreen} options={{tabBarIcon: () => (<Icon name="people-outline" size={25}/>)}} />
            <Tab.Screen options={{headerShown: false}} name='PROFILE' component={ProfileScreen} options={{tabBarIcon: () => (<Icon name="person-outline" size={25}/>)}} />
        </Tab.Navigator>
    );
}

export default TabNavigator;
