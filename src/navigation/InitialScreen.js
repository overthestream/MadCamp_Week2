import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { NavigationService } from '../common';

const InitialScreen = ({navigation, route}) => {
    return(
        <View style={styles.container}>
                <StatusBar barStyle="dark-content" />
                <TouchableOpacity
                        onPress={()=> navigation.navigate('HomeScreen')}
                        style={{
                            justifyContent: 'flex-end',
                            backgroundColor: '#FF9776',
                            padding: 20,
                            marginTop: 20,
                            marginLeft: 50,
                            borderRadius: 30,
                            width: '70%',
                        }}>
                        <Text style={{fontSize: 20, textAlign: 'center', color: 'white'}}>로그인</Text>
                    </TouchableOpacity>
                <TouchableOpacity
                        onPress={()=> navigation.navigate('SignInScreen')}
                        style={{
                            justifyContent: 'flex-end',
                            backgroundColor: '#FF9776',
                            padding: 20,
                            marginTop: 20,
                            marginLeft: 50,
                            borderRadius: 30,
                            width: '70%',
                        }}>
                        <Text style={{fontSize: 20, textAlign: 'center', color: 'white'}}>회원가입</Text>
                </TouchableOpacity>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
    }
})

export default InitialScreen;  