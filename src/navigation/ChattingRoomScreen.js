import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, TextInput, TouchableHighlight } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const ChattingRoomScreen = ({ navigation }) => {
    const [text, setText] = useState("");
    return(
        <View style={styles.container}>
                <StatusBar barStyle="dark-content" />
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.chat}
                        placeholder="채팅을 입력하세요"
                        defaultValue={text}
                        onChangeText={(text) => setText(text)}/>
                    <TouchableHighlight>
                        <Icon name="send-outline" size={30} style={styles.send}/>
                    </TouchableHighlight>
                </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    chat: {
        width: 250,
        padding: 10,
        marginTop: 200,
        height: 40,

    },
    send: {
        position: 'absolute',
        left: 365,
        right: 0,
        bottom: 5,
    },
    inputContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 5,
    }
})

export default ChattingRoomScreen;