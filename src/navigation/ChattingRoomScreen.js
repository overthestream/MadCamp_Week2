import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, TextInput } from 'react-native';

const ChattingRoomScreen = ({ navigation }) => {
    const [text, setText] = useState("");
    return(
        <View style={styles.container}>
                <StatusBar barStyle="dark-content" />
                <TextInput
                    style={styles.chat}
                    placeholder="채팅을 입력하세요"
                    defaultValue={text}
                    onChangeText={(text) => setText(text)}/>
            
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
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,

    }
})

export default ChattingRoomScreen;