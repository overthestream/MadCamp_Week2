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
import ProfileScreen from './ProfileScreen';
import ChattingListSreen from './ChattingListScreen';
import FriendListScreen from './FriendListScreen';
import EditProfileScreen from './EditProfileScreen';
import SetMbtiScreen from './SetMbtiScreen';
import LoginScreen from './LoginScreen'
import SetNicknameScreen from './SetNicknameScreen';
import ChemiMatchLoadingScreen from './ChemiMatchLoadingScreen';
import SelectMatchLoadingScreen from './SelectMatchLoadingScreen';

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
            <Stack.Navigator initialRouteName='InitialScreen'>
                <Stack.Screen options={{headerShown: false}} name="InitialScreen" component={InitialScreen}/>
                <Stack.Screen options={{headerShown: false}} name="LoginScreen" component={LoginScreen}/>
                <Stack.Screen options={{headerTitle: () => <Image style={{ width: 250, height: 220, marginTop: 80, marginLeft: '10%'}}  source={require('../img/logo.png')}/>, headerLeft:(props) => null}} name="HomeScreen" component={TabNavigator}/>
                <Stack.Screen options={{headerShown: false}} name="SignInScreen" component={SignInScreen}/>
                <Stack.Screen options={{headerTitle: () => <Image style={{ width: 250, height: 220, marginTop: 80, marginLeft: '10%'}}  source={require('../img/logo.png')}/>, headerLeft:(props) => null}} name="SelectMatchScreen" component={SelectMatchScreen}/>
                <Stack.Screen options={{headerTitle: () => <Image style={{ width: 250, height: 220, marginTop: 80, marginLeft: '10%'}}  source={require('../img/logo.png')}/>, headerLeft:(props) => null}} name="ChemiMatchScreen" component={ChemiMatchScreen}/>
                <Stack.Screen options={{headerTitle: () => <Image style={{ width: 250, height: 220, marginTop: 80, marginLeft: '10%'}}  source={require('../img/logo.png')}/>, headerLeft:(props) => null}} name="ChattingRoomScreen" component={ChattingRoomScreen}/>
                <Stack.Screen options={{headerTitle: () => <Image style={{ width: 250, height: 220, marginTop: 80, marginLeft: '10%'}}  source={require('../img/logo.png')}/>, headerLeft:(props) => null}} name="FriendDetailScreen" component={FriendDetailScreen}/>
                <Stack.Screen options={{headerTitle: () => <Image style={{ width: 250, height: 220, marginTop: 80, marginLeft: '10%'}}  source={require('../img/logo.png')}/>, headerLeft:(props) => null}} name="EditProfileScreen" component={EditProfileScreen}/>
                <Stack.Screen options={{headerShown: false}} name="SetMbtiScreen" component={SetMbtiScreen}/>
                <Stack.Screen options={{headerShown: false}} name="SetNicknameScreen" component={SetNicknameScreen}/>
                <Stack.Screen options={{headerTitle: () => <Image style={{ width: 250, height: 220, marginTop: 80, marginLeft: '10%'}}  source={require('../img/logo.png')}/>, headerLeft:(props) => null}} name="ProfileScreen" component={ProfileScreen}/>
                <Stack.Screen options={{headerShown: false}} name="ChattingListScreen" component={ChattingListSreen}/>
                <Stack.Screen options={{headerTitle: () => <Image style={{ width: 250, height: 220, marginTop: 80, marginLeft: '10%'}}  source={require('../img/logo.png')}/>, headerLeft:(props) => null}} name="FriendListScreen" component={FriendListScreen}/>
                <Stack.Screen options={{headerTitle: () => <Image style={{ width: 250, height: 220, marginTop: 80, marginLeft: '10%'}}  source={require('../img/logo.png')}/>, headerLeft:(props) => null}} name="ChemiMatchLoadingScreen" component={ChemiMatchLoadingScreen}/>
                <Stack.Screen options={{headerTitle: () => <Image style={{ width: 250, height: 220, marginTop: 80, marginLeft: '10%'}}  source={require('../img/logo.png')}/>, headerLeft:(props) => null}} name="SelectMatchLoadingScreen" component={SelectMatchLoadingScreen}/>
            </Stack.Navigator>
    )
}

export { StackNavigator };