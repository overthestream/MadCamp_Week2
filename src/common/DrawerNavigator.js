import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen from '../navigation/ProfileScreen';
import FriendListScreen from '../navigation/FriendListScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Profile" component={ProfileScreen} options={{drawerLabel: '프로필'}}/>
            <Drawer.Screen name="FriendList" component={FriendListScreen} options={{drawerLabel: '친구목록'}}/>
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;