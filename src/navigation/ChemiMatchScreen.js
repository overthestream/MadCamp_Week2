import React, { component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { NavigationService } from '../common';

const ChemiMatchScreen = ({ navigation }) => {
    return(
        <View style={styles.container}>
                <StatusBar barStyle="dark-content" />
                <Text style={{fontSize:25, fontWeight: 'bold', width: 300, marginLeft: 50, marginTop: 100}}>당신의 MBTI <Text style={{color: '#8A94FF'}}>ISFJ</Text>와 잘 맞는 MBTI는 <Text style={{color: '#8A94FF'}}>ESFJ, ISTJ, ESTJ</Text>입니다. 매칭을 시작하시겠습니까?</Text>
                <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('ChattingRoomScreen')}
                    style={{
                        justifyContent: 'flex-end',
                        backgroundColor: '#FF9776',
                        padding: 20,
                        marginLeft: 60,
                        marginTop: 50,
                        marginBottom: 20,
                        borderRadius: 30,
                        width: 120,
                        height: 60,
                    }}>
                    <Text style={{fontSize: 17, textAlign: 'center', color: 'white'}}>YES</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{
                        justifyContent: 'flex-end',
                        backgroundColor: '#FF9776',
                        padding: 20,
                        marginLeft: 50,
                        marginTop: 50,
                        marginBottom: 20,
                        borderRadius: 30,
                        width: 120,
                        height: 60,
                    }}>
                    <Text style={{fontSize: 17, textAlign: 'center', color: 'white'}}>NO</Text>
                </TouchableOpacity>
                </View>


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

export default ChemiMatchScreen;  