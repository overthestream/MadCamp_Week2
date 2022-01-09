import React, { Component, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, Image, ScrollView } from 'react-native';

const FriendInfo = ({ nickname, type, age, gender, navigation }) => {
        const [image, setImage] = useState(require('../img/INTP.png'));
        useEffect(() => {
            switch(type){
            case 'INTP':
                setImage(require('../img/INTP.png'));
                break;
            case 'INTJ':
                setImage(require('../img/INTJ.png'));
                break;
            case 'INFP':
                setImage(require('../img/INFP.png'));
                break;
            case 'INFJ':
                setImage(require('../img/INFJ.png'));
                break;
            case 'ISTP':
                setImage(require('../img/ISTP.png'));
                break;
            case 'ISTJ':
                setImage(require('../img/ISTJ.png'));
                break;
            case 'ISFP':
                setImage(require('../img/ISFP.png'));
                break;
            case 'ISFJ':
                setImage(require('../img/ISFJ.png'));
                break;
            case 'ENTP':
                setImage(require('../img/ENTP.png'));
                break;
            case 'ENTJ':
                setImage(require('../img/ENTJ.png'));
                break;
            case 'ENFP':
                setImage(require('../img/ENFP.png'));
                break;
            case 'ENFJ':
                setImage(require('../img/ENFJ.png'));
                break;
            case 'ESTP':
                setImage(require('../img/ESTP.png'));
                break;
            case 'ESTJ':
                setImage(require('../img/ESTJ.png'));
                break;
            case 'ESFP':
                setImage(require('../img/ESFP.png'));
                break;
            case 'ESFJ':
                setImage(require('../img/ESFJ.png'));
                break;
            };
        }, [type]);
        
        return(
            <View>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('FriendDetailScreen', { nickname: nickname, type: type, age: age, gender: gender, image: image})}
                    style={styles.info}>
                    <Image source={image} style={{width: 110, height: 110}}/>
                    <View style={styles.content}>
                        <Text style={{fontSize: 16, marginBottom: 10, marginTop: 20}}>
                            <View style={{borderWidth: 3, borderRadius: 3, borderColor: '#A0DBDB', backgroundColor: '#A0DBDB'}}>
                                <Text style={{color: 'white'}}>닉네임</Text>
                            </View>     {nickname}</Text>
                        <Text style={{fontSize: 16, marginBottom: 10, marginTop: 20}}>
                            <View style={{borderWidth: 3, borderRadius: 3, borderColor: '#A0DBDB', backgroundColor: '#A0DBDB'}}>
                                <Text style={{color: 'white'}}>MBTI</Text>
                            </View>      {type}</Text>
                    </View>
                </TouchableOpacity>
                <View style={{width: 500, height: 1, backgroundColor: '#808080', marginBottom: 30}}/>
            </View>
            );

}

const FriendListScreen = ({ navigation }) => {

    //친구목록 데이터 불러오기
    
    return(
            <View style={styles.container}>
                    <StatusBar barStyle="dark-content" />
                    <FriendInfo nickname='잇프제' type='ISFJ' age='20' gender='여' navigation={navigation}/>
                    <FriendInfo nickname='인팁남' type='INTP' age='27' gender='남' navigation={navigation}/>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
    },
    info: {
        flexDirection: 'row',
        marginBottom: 30,
    },
    content: {
        flexDirection: 'column',
        fontSize: 60,
    },
    
})

export default FriendListScreen;