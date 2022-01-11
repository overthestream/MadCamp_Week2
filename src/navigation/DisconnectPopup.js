import React from "react";
import { Text, View, Modal, TouchableOpacity, StyleSheet } from "react-native";


const DisconnectPopup = (props) => {
    const { navigation, visible, close } = props;
    return (
        <Modal animationType="slide" transparent={true} visible={visible}>
        <View style={styles.modalBackground}>
            <View style={styles.modal}>
            <Text style={{ fontSize: 20,
                           fontWeight: 'bold',
                           flex: 1,
                           marginLeft: '8%',}}>
                친구와의 연결이 끊겼습니다 ! </Text>
                <TouchableOpacity onPress={() => {close();
                                                  navigation.navigate('HomeScreen');}}
                    style={{
                        justifyContent: 'flex-end',
                        backgroundColor: '#56A7A7',
                        justifyContent: "center",
                        padding: 20,
                        borderRadius: 30,
                        marginLeft: '15%',
                        width: 100,
                        height: 60,
                    }}>
                    <Text style={{ color: 'white', fontSize: 18, textAlign: 'center'}}>확인</Text>
                </TouchableOpacity>
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

export default DisconnectPopup;