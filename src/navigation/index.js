import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
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
import SetMbtiScreen from './SetMbtiScreen';
import LoginScreen from './LoginScreen'
import SetNicknameScreen from './SetNicknameScreen';

const CustomHeader = props => {
    return(
        <View>
            <Image source='../img/logo.png'></Image>
        </View>
    )
}

const Stack = createStackNavigator();

const StackNavigator = () => {
    return(
            <Stack.Navigator initialRouteName='InitialScreen'
                             he> 
                <Stack.Screen options={{headerShown: false}} name="InitialScreen" component={InitialScreen}/>
                <Stack.Screen options={{headerShown: false}} name="LoginScreen" component={LoginScreen}/>
                <Stack.Screen options={{headerShown: false}} name="HomeScreen" component={TabNavigator}/>
                <Stack.Screen options={{headerShown: false}} name="SignInScreen" component={SignInScreen}/>
                <Stack.Screen options={{headerShown: false}} name="SelectMatchScreen" component={SelectMatchScreen}/>
                <Stack.Screen options={{headerShown: false}} name="ChemiMatchScreen" component={ChemiMatchScreen}/>
                <Stack.Screen options={{headerShown: false}} name="ChattingRoomScreen" component={ChattingRoomScreen}/>
                <Stack.Screen options={{headerShown: false}} name="FriendDetailScreen" component={FriendDetailScreen}/>
                <Stack.Screen options={{headerShown: false}} name="EditProfileScreen" component={EditProfileScreen}/>
                <Stack.Screen options={{headerShown: false}} name="SetMbtiScreen" component={SetMbtiScreen}/>
                <Stack.Screen options={{headerShown: false}} name="SetNicknameScreen" component={SetNicknameScreen}/>
            </Stack.Navigator>
    )
}

export { StackNavigator };