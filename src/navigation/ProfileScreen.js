import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
import { useSelector } from 'react-redux';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import {  useDispatch } from 'react-redux';
import { changeAge, changeNickname } from '../reducers/user';

const ProfileContent = ({ nickname, mbti, age, gender}) => {
    const [image, setImage] = useState(require('../img/INTP.png'));
        useEffect(() => {
            switch(mbti){
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
        }, [mbti]);
    return(
        <View style={{marginLeft: 50}}>
            <Image resizeMethod='resize' source={image} style={{width: 200, height: 200, marginLeft: '10%', marginBottom: '7%'}}/>
            <Text style={{fontFamily: 'aTitleGothic', fontSize: 20, marginBottom: 15, marginLeft: 40}}><Text style={styles.title}> 닉네임  </Text>     {nickname}</Text>
            <Text style={{fontFamily: 'aTitleGothic', fontSize: 20, marginBottom: 15, marginLeft: 40}}><Text style={styles.title}> MBTI  </Text>      {mbti}</Text>
            <Text style={{fontFamily: 'aTitleGothic', fontSize: 20, marginBottom: 15, marginLeft: 40}}><Text style={styles.title}>  나이   </Text>      {age}</Text>
            <Text style={{fontFamily: 'aTitleGothic', fontSize: 20, marginBottom: 15, marginLeft: 40}}><Text style={styles.title}>  성별   </Text>      {gender}</Text>
        </View>
    )
}

const ProfileScreen = ({ navigation }) => {
    const state = useSelector((state) => state);
    const { nickname, mbti, age, gender } = state.user;
    const dispatch = useDispatch();

    const changenickname = (nick) => {
        dispatch(changeNickname(nick));
    }
    
    return(
        <View style={styles.container}>
                <StatusBar barStyle="dark-content" />
                <ProfileContent nickname={nickname} mbti={mbti} age={age} gender={gender}/>
                <TouchableOpacity
                    onPress={() => navigation.navigate('EditProfileScreen')}
                    style={{
                        justifyContent: 'flex-end',
                        backgroundColor: '#56A7A7',
                        padding: 20,
                        marginLeft: '30%',
                        marginTop: 20,
                        marginBottom: 20,
                        borderRadius: 30,
                        width: 150,
                        height: 60,
                }}>
                    <Text style={{fontFamily: 'aTitleGothic', fontSize: 17, textAlign: 'center', color: 'white'}}>수정하기</Text>
                </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        paddingTop: 30,
    },
    title: {
        fontSize: 21, 
        backgroundColor: '#56A7A7',
        color: 'white',
        textAlign: 'center',

    }
})

export default ProfileScreen;