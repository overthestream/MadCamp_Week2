import React, { useState, useEffect } from "react";
import { Text, View, Modal, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { changeMbti } from '../reducers/user';

const Popup = (props) => {
    const { mbti, navigation, visible, close, choice } = props;
    const dispatch = useDispatch();
    
    const changembti = mbti => {
        dispatch(changeMbti(mbti));
    }


    return (
        <Modal animationType="slide" transparent={true} visible={visible}>
        <View style={styles.modalBackground}>
            <View style={styles.modal}>
            <Text style={{ fontSize: 20,
                           fontWeight: 'bold',
                           flex: 1,
                           marginLeft: 10,}}>
                당신의 MBTI를  
                    <Text style={{ color: '#8A94FF'}}> {mbti}</Text>
                    으로 설정하시겠습니까 ?</Text>
                <View style={{flexDirection: 'row'}}>
                <TouchableOpacity onPress={() => {
                    choice();
                    changembti(mbti);
                    navigation.navigate('SetNicknameScreen');
                }}
                style={{
                    justifyContent: 'flex-end',
                    backgroundColor: '#56A7A7',
                    justifyContent: "center",
                    padding: 20,
                    borderRadius: 30,
                    marginLeft: 50,
                    width: 100,
                    height: 60,
                }}
                >
                    <Text style={{ color: 'white', fontSize: 18}}>예</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => close()}
                style={{
                    justifyContent: 'flex-end',
                    backgroundColor: '#56A7A7',
                    justifyContent: "center",
                    padding: 20,
                    borderRadius: 30,
                    marginLeft: 50,
                    width: 100,
                    height: 60,
                }}>
                    <Text style={{ color: 'white', fontSize: 18}}>아니오</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: 'white',
    width: 1000,
    height: 1000,
  },
  modal: {
    width: "80%",
    height: "20%"
  }
});

export default Popup;