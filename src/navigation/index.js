import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import InitialScreen from './InitialScreen';
import HomeScreen from './HomeScreen';
import SignInScreen from './SignInScreen';
import SelectMatchScreen from './SelectMatchScreen';
import ChemiMatchScreen from './ChemiMatchScreen';

const AuthStack = createStackNavigator(
    {
        InitialScreen: {screen: InitialScreen, navigationOptions: { headerShown: false, }},
        HomeScreen: {screen: HomeScreen, navigationOptions: { headerShown: false,}},
        SignInScreen: {screen: SignInScreen, navigationOptions: { headerShown: false,}},
        SelectMatchScreen: {screen: SelectMatchScreen, navigationOptions: { headerShown: false,}},
        ChemiMatchScreen: {screen: ChemiMatchScreen, navigationOptions: { headerShown: false,}},
    },
    {
        initialRouteName: 'InitialScreen',
        navigationOptions: {
            header: null,
        },
    },
);

// 최상단 네비게이터
const AppNavigator = createSwitchNavigator(
    {
        Auth: AuthStack
    },
    {
        initialRouteName: 'Auth',
    }
);

export default createAppContainer(AppNavigator);
