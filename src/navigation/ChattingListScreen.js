import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, Image, ScrollView } from 'react-native';

const ChattingRoomInfo = ({ nickname, lastmessage, type, age, gender, navigation }) => {
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
                    onPress={() => navigation.navigate('ChattingRoomScreen')}
                    style={styles.info}>
                    <Image source={image} style={{width: 80, height: 80}}/>
                    <View style={styles.content}>
                        <Text style={{fontSize: 16, marginBottom: 10, marginTop: 20, fontSize: 18, fontWeight: 'bold', color: '#56A7A7'}}>{nickname}</Text>
                        <View style={{ paddingLeft: 10, paddingTop: 2, paddingBottom: 2, borderRadius: 7, backgroundColor: 'rgba(0, 0, 0, 0.1)'}}>
                            <Text style={{ fontSize: 14, marginTop: 2 }}>{lastmessage}</Text>
                        </View>
                    </View>

                </TouchableOpacity>
                <View style={{width: 500, height: 1, backgroundColor: '#808080', marginBottom: 30}}/>
            </View>
            );

}

const FriendListScreen = ({ navigation }) => {
    return(
            <View style={styles.container}>
                <ScrollView 
                    style={styles.scrollView}
                    contentContainerStyle={{
                        flexGrow: 1,
                        flexDirection: 'column',
                        height: '100%',
                        flexWrap: 'wrap'}}>
                    <StatusBar barStyle="dark-content" />
                    <ChattingRoomInfo nickname='잇프제' type='ISFJ' lastmessage="안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕" navigation={navigation}/>
                    <ChattingRoomInfo nickname='인프제' type='INFJ' lastmessage="안녕" age='20' gender='여' navigation={navigation}/>
                    <ChattingRoomInfo nickname='잇프피' type='ISFP' lastmessage="안녕" age='20' gender='여' navigation={navigation}/>
                    <ChattingRoomInfo nickname='엣프피' type='ESFP' lastmessage="안녕" age='20' gender='여' navigation={navigation}/>
                    <ChattingRoomInfo nickname='엔티피' type='ENTP' lastmessage="안녕" age='20' gender='여' navigation={navigation}/>
                    <ChattingRoomInfo nickname='엔티제' type='ENTJ' lastmessage="안녕" age='20' gender='여' navigation={navigation}/>
                    <ChattingRoomInfo nickname='엣프제' type='ESFJ' lastmessage="안녕" age='20' gender='여' navigation={navigation}/>
                </ScrollView>
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
    scrollView: {
        width: 370,
        marginHorizontal: 20,
    },
})

export default FriendListScreen;