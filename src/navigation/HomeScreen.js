import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { NavigationService } from '../common';

const HomeScreen = props => {
    return(
        <View style={styles.container}>
                <StatusBar barStyle="dark-content" />
                <TouchableOpacity
                    onPress={()=> NavigationService.navigate('SelectMatchScreen', {
                        screen: 'ChemiMatchScreen',
                        info: 'information'
                    })}
                    style={{
                        justifyContent: 'flex-end',
                        backgroundColor: '#FF9776',
                        padding: 20,
                        marginTop: 20,
                        marginLeft: 40,
                        borderRadius: 30,
                        width: '80%',
                    }}>
                    <Text style={{fontSize: 20, textAlign: 'center', color: 'white'}}>선택랜덤매칭</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=> NavigationService.navigate('ChemiMatchScreen', {
                        screen: 'ChemiMatchScreen',
                        info: 'information'
                    })}
                    style={{
                        justifyContent: 'flex-end',
                        backgroundColor: '#FF9776',
                        padding: 20,
                        marginTop: 20,
                        marginLeft: 40,
                        borderRadius: 30,
                        width: '80%',
                    }}>
                    <Text style={{fontSize: 20, textAlign: 'center', color: 'white'}}>궁합매칭</Text>
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

export default HomeScreen;  