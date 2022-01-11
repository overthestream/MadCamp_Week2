import React, { useEffect } from 'react';
import { BackHandler } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../navigation/HomeScreen';
import FriendListScreen from '../navigation/FriendListScreen';
import ProfileScreen from '../navigation/ProfileScreen';

import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    useEffect(() => {
        const backAction = () => { return true; };
        const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction);

        return () => backHandler.remove();
    }, []);

    return(
        <Tab.Navigator 
            screenOptions={{ headerShown: false }}
            tabBarOptions={{
                activeTintColor: '#56A7A7',
            }}
            >
            <Tab.Screen options={{headerShown: false}} name='CHAT' component={HomeScreen} options={{tabBarIcon: () => (<Icon name="chatbubbles-outline" size={25}/>)}} />
            <Tab.Screen options={{headerShown: false}} name='FRIEND' component={FriendListScreen} options={{tabBarIcon: () => (<Icon name="people-outline" size={25}/>)}} />
            <Tab.Screen options={{headerShown: false}} name='PROFILE' component={ProfileScreen} options={{tabBarIcon: () => (<Icon name="person-outline" size={25}/>)}} />
        </Tab.Navigator>
    );
}

export default TabNavigator;
