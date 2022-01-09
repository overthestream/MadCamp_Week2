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
                            backgroundColor: '#56A7A7',
                            padding: 20,
                            marginTop: 20,
                            marginLeft: 80,
                            borderRadius: 30,
                            width: '60%',
                        }}>
                        <Text style={{fontSize: 20, textAlign: 'center', color: 'white'}}>로그인</Text>
                    </TouchableOpacity>
                <TouchableOpacity
                        onPress={()=> navigation.navigate('SetMbtiScreen')}
                        style={{
                            justifyContent: 'flex-end',
                            backgroundColor: '#56A7A7',
                            padding: 20,
                            marginTop: 20,
                            marginLeft: 80,
                            borderRadius: 30,
                            width: '60%',
                        }}>
                        <Text style={{fontSize: 20, textAlign: 'center', color: 'white'}}>회원가입</Text>
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