import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, ScrollView, Image } from 'react-native';
import Popup from './Popup'


const MBTIitem = ({type, imageResource, navigation}) => {
    const [select, setSelect] = useState(false);

    const [modalVisible, setModalVisible] = useState(false);

    return(
        <TouchableOpacity
                        onPress={() => { if(!select){
                                        setModalVisible(true);}
                                        setSelect(!select);
                                        }}
                        style={{
                            justifyContent: 'center',
                            padding: 0,
                            marginLeft: 20,
                            marginBottom: 20,
                            borderRadius: 50,
                            width: '10.5%',
                            height: '37%',
                            borderWidth: 3,
                            borderStyle: 'dashed',
                            borderColor: select== false ? '#808080' : '#8A94FF',
                            alignItems: 'center' 
                        }}>
                        <Popup visible={modalVisible} choice={() => setModalVisible(false)} close={() => {setModalVisible(false); setSelect(false);}} mbti={type} navigation={navigation}/>
                        <Image source={imageResource} style={styles.image}/>
                        <Text style={{fontSize: 28, textAlign: 'center', fontWeight: 'bold', color: '#808080'}}>{type}</Text>
        </TouchableOpacity>
    );
}

const SetMbtiScreen = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <Text style={{
                position: 'absolute',
                left: 110,
                top: 100,
                fontSize: 17,
                fontWeight: 'bold'
            }}>자신의 MBTI를 선택하세요.</Text>
            <ScrollView style={styles.scrollView}
                        horizontal={true}
                        contentContainerStyle={{
                            flexDirection: 'row',
                            flexWrap: 'wrap'}}>
                <StatusBar barStyle="dark-content" />
                <MBTIitem type="INTP" imageResource={require("../img/INTP.png")} navigation={navigation}/>
                <MBTIitem type="INTJ" imageResource={require("../img/INTJ.png")} navigation={navigation}/>
                <MBTIitem type="INFP" imageResource={require("../img/INFP.png")} navigation={navigation}/>
                <MBTIitem type="INFJ" imageResource={require("../img/INFJ.png")} navigation={navigation}/>
                <MBTIitem type="ISTP" imageResource={require("../img/ISTP.png")} navigation={navigation}/>
                <MBTIitem type="ISTJ" imageResource={require("../img/ISTJ.png")} navigation={navigation}/>
                <MBTIitem type="ISFP" imageResource={require("../img/ISFP.png")} navigation={navigation}/>
                <MBTIitem type="ISFJ" imageResource={require("../img/ISFJ.png")} navigation={navigation}/>
                <MBTIitem type="ENTP" imageResource={require("../img/ENTP.png")} navigation={navigation}/>
                <MBTIitem type="ENTJ" imageResource={require("../img/ENTJ.png")} navigation={navigation}/>
                <MBTIitem type="ENFP" imageResource={require("../img/ENFP.png")} navigation={navigation}/>
                <MBTIitem type="ENFJ" imageResource={require("../img/ENFJ.png")} navigation={navigation}/>
                <MBTIitem type="ESTP" imageResource={require("../img/ESTP.png")} navigation={navigation}/>
                <MBTIitem type="ESTJ" imageResource={require("../img/ESTJ.png")} navigation={navigation}/>
                <MBTIitem type="ESFP" imageResource={require("../img/ESFP.png")} navigation={navigation}/>
                <MBTIitem type="ESFJ" imageResource={require("../img/ESFJ.png")} navigation={navigation}/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        width: 500,
    },
    scrollView: {
        width: 350,
        marginHorizontal: 20,
        marginTop: 150,
    },
    image: {
        width: 90,
        height:90,
    }
})

export default SetMbtiScreen;  
