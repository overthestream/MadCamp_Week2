import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from '../common/DrawerNavigator';
import TabNavigator from '../common/TabNavigator';
import InitialScreen from './InitialScreen';
import HomeScreen from './HomeScreen';
import SignInScreen from './SignInScreen';
import SelectMatchScreen from './SelectMatchScreen';
import ChemiMatchScreen from './ChemiMatchScreen';
import ChattingRoomScreen from './ChattingRoomScreen';
import FriendDetailScreen from './FriendDetailScreen';
import EditProfileScreen from './EditProfileScreen';
import { RefreshControlComponent } from 'react-native';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return(
            <Stack.Navigator initialRouteName='InitialScreen'>
                <Stack.Screen options={{headerShown: false}} name="InitialScreen" component={InitialScreen}/>
                <Stack.Screen options={{headerShown: false}} name="HomeScreen" component={TabNavigator}/>
                <Stack.Screen options={{headerShown: false}} name="SignInScreen" component={SignInScreen}/>
                <Stack.Screen options={{headerShown: false}} name="SelectMatchScreen" component={SelectMatchScreen}/>
                <Stack.Screen options={{headerShown: false}} name="ChemiMatchScreen" component={ChemiMatchScreen}/>
                <Stack.Screen options={{headerShown: false}} name="ChattingRoomScreen" component={ChattingRoomScreen}/>
                <Stack.Screen options={{headerShown: false}} name="FriendDetailScreen" component={FriendDetailScreen}/>
                <Stack.Screen options={{headerShown: false}} name="EditProfileScreen" component={EditProfileScreen}/>
            </Stack.Navigator>
    )
}

export { StackNavigator };