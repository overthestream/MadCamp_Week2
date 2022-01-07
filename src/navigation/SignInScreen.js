import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { NavigationService } from '../common';

const SignInScreen = ({ navigation }) => {
    return(
        <View style={styles.container}>
                <StatusBar barStyle="dark-content" />
                <TouchableOpacity
                        onPress={()=> navigation.back()}
                        style={{
                            justifyContent: 'flex-end',
                            backgroundColor: '#FF9776',
                            padding: 20,
                            marginTop: 20,
                            borderRadius: 30
                        }}>
                        <Text style={{fontSize: 20, textAlign: 'center', color: 'white'}}>뒤로</Text>
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

export default SignInScreen;