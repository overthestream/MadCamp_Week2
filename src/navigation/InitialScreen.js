import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, Image } from 'react-native';
import { NavigationService } from '../common';
import loginButtonImage from '../img/kakao_login.png'
import { Linking } from 'expo';

const InitialScreen = ({navigation, route}) => {
    return(
        <View style={styles.container}>
                <StatusBar barStyle="dark-content" />
                <TouchableOpacity
                        onPress={
                            ()=>
                            navigation.navigate('LoginScreen')
                        }
                        style={{
                            justifyContent: 'flex-end',
                            marginLeft:'10%',
                            marginRight:'10%'
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

const loginWithKaKao = async () => {
    try{
        //navigation.navigate('HomeScreen')}
        const token =await login();
        console.log(token);
    } catch (err) {
        console.log(err);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FBFC',
        justifyContent: 'center',
    }
})

export default InitialScreen;  