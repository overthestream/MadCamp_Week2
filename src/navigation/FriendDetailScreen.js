import React, { Component} from 'react';
import { Image } from 'react-native';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';

const ProfileContent = ({ nickname, mbti, age, sex, image}) => {
    return(
        <View style={{marginLeft: 50}}>
            <Image source={image} style={{width: 200, height: 200, marginLeft: 50, marginBottom: 50}}/>
            <Text style={{fontSize: 20, marginBottom: 15}}><Text style={styles.title}> 닉네임 </Text>     {nickname}</Text>
            <Text style={{fontSize: 20, marginBottom: 15}}><Text style={styles.title}>  MBTI  </Text>       {mbti}</Text>
            <Text style={{fontSize: 20, marginBottom: 15}}><Text style={styles.title}>   나이   </Text>         {age}</Text>
            <Text style={{fontSize: 20, marginBottom: 15}}><Text style={styles.title}>   성별   </Text>         {sex}</Text>
        </View>
    )
}

const FriendDetailScreen = ({ route, navigation }) => {
    const { nickname, type, age, sex, image } = route.params;
    return(
        <View style={styles.container}>
                <StatusBar barStyle="dark-content" />
                <ProfileContent nickname={nickname} mbti={type} age={age} sex={sex} image={image}/>
                <TouchableOpacity
                style={{
                    justifyContent: 'flex-end',
                    backgroundColor: '#FF9776',
                    padding: 20,
                    marginLeft: 100,
                    marginTop: 50,
                    marginBottom: 20,
                    borderRadius: 30,
                    width: 150,
                    height: 60,
                }}>
                <Text style={{fontSize: 17, textAlign: 'center', color: 'white'}}>채팅방 만들기</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    title: {
        fontSize: 21, 
        backgroundColor: '#FF9776',
        color: 'white',
        textAlign: 'center',
    }
})

export default FriendDetailScreen;