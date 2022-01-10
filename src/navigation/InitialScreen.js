import React from 'react';
import { View, TouchableOpacity, StyleSheet, StatusBar, Image, Text } from 'react-native';
import loginButtonImage from '../img/kakao_login.png'
import { Linking } from 'expo';

const InitialScreen = ({navigation, route}) => {
    return(
        <View style={styles.container}>
                <StatusBar barStyle="dark-content" />
                <Image source={require('../img/logo3.png')}
                       style={{
                           width: 210,
                           height: 250,
                           marginLeft: '20%',
                           marginBottom: 50,             
                       }}/>
                <TouchableOpacity
                        onPress={
                            ()=>
                            navigation.navigate('LoginScreen')
                        }
                        style={{
                            marginLeft:'10%',
                            marginRight:'10%',
                        }}>
                        <Image 
                            source ={loginButtonImage}
                            style ={{                           
                                resizeMode:'stretch',
                                width: '100%'
                            }}/>
                    </TouchableOpacity>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FBFC',
        justifyContent: 'center',
    }
})

export default InitialScreen;  