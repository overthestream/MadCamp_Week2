import React from 'react';
import { Image, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { StackNavigator } from '../navigation';
import HomeScreen from '../navigation/HomeScreen';
import InitialScreen from '../navigation/InitialScreen';
import ProfileScreen from '../navigation/ProfileScreen';
import FriendListScreen from '../navigation/FriendListScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';


const CustomDrawerContent = (props) => {
    const state = useSelector((state) => state);
    const { nickname } = state;

    return(
        <DrawerContentScrollView {...props}>
            <Image source={require('../img/logo.png')} size={10} />
            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
    );
}
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return(
        <Drawer.Navigator 
            initialRouteName='HomeScreen'>
            <Drawer.Screen options={{ headerTitle: 'HOME'}} name='HomeScreen' component={StackNavigator} options={{drawerLabel: '홈'}} />
            <Drawer.Screen options={{headerShown: false}} name='ProfileScreen' component={ProfileScreen} options={{drawerLabel: '프로필'}} />
            <Drawer.Screen options={{headerShown: false}} name='FriendListScreen' component={FriendListScreen} options={{drawerLabel: '친구목록'}}/>
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;