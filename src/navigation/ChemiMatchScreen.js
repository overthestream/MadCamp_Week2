import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { useSelector } from 'react-redux';

const Chemi = [
    {   
        user: 'INFP',
        chemi: ['ENFJ', 'ENTJ'], 
    },
    {   
        user: 'ENFP',
        chemi: ['ENFP', 'ENTP'], 
    },
    {
        user: 'INFJ',
        chemi: ['INFJ', 'INTJ'],
    },
    {
        user: 'ENFJ',
        chemi: ['INFP', 'ISFP'],
    },
    {
        user: 'INTJ',
        chemi: ['ENFP', 'ENTP'],
    },
    {
        user: 'ENTJ',
        chemi: ['ENTJ', 'INTP'],
    },
    {
        user: 'INTP',
        chemi: ['ENTJ', 'ESTJ'],
    },
    {
        user: 'ENTP',
        chemi: ['INFJ', 'ENTJ'],
    },
    {
        user: 'ISFP',
        chemi: ['ENFJ', 'ESFJ', 'ESTJ'],
    },
    {
        user: 'ESFP',
        chemi: ['ISFJ', 'ISTJ'],
    },
    {
        user: 'ISTP',
        chemi: ['ESFJ', 'ESTJ'],
    },
    {
        user: 'ESTP',
        chemi: ['ISFJ', 'ISTJ'],
    },
    {
        user: 'ISFJ',
        chemi: ['ESFP', 'ESTP'],
    },
    {
        user: 'ESFJ',
        chemi: ['ISFP', 'ISTP'],
    },
    {
        user: 'ISTJ',
        chemi: ['ESFP', 'ESTP'],
    },
    {
        user: 'ESTJ',
        chemi: ['INTP', 'ISFP', 'ISTP'],
    },
];

const ChemiMatchScreen = ({ navigation }) => {
    const state = useSelector((state) => state);
    const { mbti } = state.user;
    const userchemi = Chemi.find(x => x.user == mbti).chemi;

    const UserChemi = () => {
        console.log(userchemi);
        return userchemi.map(mbti => <Text style={{color: '#56A7A7', fontFamily: 'aTitleGothic', fontWeight:'bold'}}>{mbti}  </Text>)
    }


    return(
        <View style={styles.container}>
                <StatusBar barStyle="dark-content" />
                <Text style={{fontFamily: 'aTitleGothic', fontSize:22, fontWeight: 'bold', width: 300, marginLeft: '10%', marginTop: 0}}>
                    <Text style={{fontFamily: 'aTitleGothic'}}>당신의 MBTI </Text>
                    <Text style={{fontFamily: 'aTitleGothic', color: '#56A7A7', fontWeight:'bold'}}>{mbti}</Text>
                    <Text style={{fontFamily: 'aTitleGothic'}}>와 잘 맞는 MBTI는</Text> {UserChemi()}
                    <Text style={{fontFamily: 'aTitleGothic'}}>입니다.매칭을 시작하시겠습니까?</Text></Text>
                <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('ChemiMatchLoadingScreen', { Mbtis: userchemi})}
                    style={{
                        justifyContent: 'flex-end',
                        backgroundColor: '#56A7A7',
                        padding: 20,
                        marginLeft: '10%',
                        marginTop: 50,
                        marginBottom: 20,
                        borderRadius: 30,
                        width: 120,
                        height: 60,
                    }}>
                    <Text style={{fontFamily: 'aTitleGothic', fontSize: 17, textAlign: 'center', color: 'white'}}>YES</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{
                        justifyContent: 'flex-end',
                        backgroundColor: '#56A7A7',
                        padding: 20,
                        marginLeft: 50,
                        marginTop: 50,
                        marginBottom: 20,
                        borderRadius: 30,
                        width: 120,
                        height: 60,
                    }}>
                    <Text style={{fontFamily: 'aTitleGothic', fontSize: 17, textAlign: 'center', color: 'white'}}>NO</Text>
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