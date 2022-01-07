import React, { component, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, ScrollView, Image } from 'react-native';
import { NavigationService } from '../common';

const MBTIitem = ({type, imageResource}) => {
    const [select, setSelect] = useState(false);
    return(
        <TouchableOpacity
                        onPress={() => setSelect(!select)}
                        style={{
                            justifyContent: 'center',
                            padding: 0,
                            marginLeft: 20,
                            marginBottom: 20,
                            borderRadius: 50,
                            width: '10.5%',
                            height: '32%',
                            borderWidth: 3,
                            borderStyle: 'dashed',
                            borderColor: select== false ? '#808080' : '#8A94FF',
                            alignItems: 'center' 
                        }}>
                        <Image source={imageResource} style={styles.image}/>
                        <Text style={{fontSize: 28, textAlign: 'center', fontWeight: 'bold', color: '#808080'}}>{type}</Text>
        </TouchableOpacity>
    );
}

const SelectMatchScreen = props => {
    return(
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}
                        horizontal={true}
                        contentContainerStyle={{
                            flexDirection: 'row',
                            flexWrap: 'wrap'}}>
                <StatusBar barStyle="dark-content" />
                <MBTIitem type="INTP" imageResource={require("../img/INTP.png")}/>
                <MBTIitem type="INTJ" imageResource={require("../img/INTJ.png")}/>
                <MBTIitem type="INFP" imageResource={require("../img/INFP.png")}/>
                <MBTIitem type="INFJ" imageResource={require("../img/INFJ.png")}/>
                <MBTIitem type="ISTP" imageResource={require("../img/ISTP.png")}/>
                <MBTIitem type="ISTJ" imageResource={require("../img/ISTJ.png")}/>
                <MBTIitem type="ISFP" imageResource={require("../img/ISFP.png")}/>
                <MBTIitem type="ISFJ" imageResource={require("../img/ISFJ.png")}/>
                <MBTIitem type="ENTP" imageResource={require("../img/ENTP.png")}/>
                <MBTIitem type="ENTJ" imageResource={require("../img/ENTJ.png")}/>
                <MBTIitem type="ENFP" imageResource={require("../img/ENFP.png")}/>
                <MBTIitem type="ENFJ" imageResource={require("../img/ENFJ.png")}/>
                <MBTIitem type="ESTP" imageResource={require("../img/ESTP.png")}/>
                <MBTIitem type="ESTJ" imageResource={require("../img/ESTJ.png")}/>
                <MBTIitem type="ESFP" imageResource={require("../img/ESFP.png")}/>
                <MBTIitem type="ESFJ" imageResource={require("../img/ESFJ.png")}/>
            </ScrollView>
            <TouchableOpacity
                style={{
                    justifyContent: 'flex-end',
                    backgroundColor: '#FF9776',
                    padding: 20,
                    marginLeft: 100,
                    marginBottom: 20,
                    borderRadius: 30,
                    width: 180,
                    height: 70,
                }}>
                <Text style={{fontSize: 20, textAlign: 'center', color: 'white'}}>매칭 시작</Text>
            </TouchableOpacity>
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
        width: 100,
        height:100,
    }
})

export default SelectMatchScreen;  
