import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from '../navigation';
import HomeScreen from '../navigation/HomeScreen';
import InitialScreen from '../navigation/InitialScreen';
import ProfileScreen from '../navigation/ProfileScreen';
import FriendListScreen from '../navigation/FriendListScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return(
        <Drawer.Navigator initialRouteName='HomeScreen'>
            <Drawer.Screen options={{headerShown: false}} name='HomeScreen' component={StackNavigator} options={{drawerLabel: '홈'}} />
            <Drawer.Screen options={{headerShown: false}} name='ProfileScreen' component={ProfileScreen} options={{drawerLabel: '프로필'}} />
            <Drawer.Screen options={{headerShown: false}} name='FriendListScreen' component={FriendListScreen} options={{drawerLabel: '친구목록'}}/>
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;