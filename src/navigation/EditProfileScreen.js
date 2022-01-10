import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { changeNickname, changeMbti} from '../reducers/user';

const EditProfileScreen = ({ navigation }) => {
    const state = useSelector((state) => state);
    const { nickname, mbti } = state.user;

    const [ newnick, setNick ] = useState(nickname);
    const [ newmbti, setMbti ] = useState(mbti);

    const dispatch = useDispatch();

    const changenick = newnick => {
        dispatch(changeNickname(newnick));
    }

    const changembti = newmbti => {
        dispatch(changeMbti(newmbti));
    }

    return(<View style={styles.container}>
        <Text style={styles.title1}> 
            새로운 닉네임
        </Text>
        <TextInput
            style={styles.input1}
            onChangeText={(text) => setNick(text)}
            placeholder={ nickname }/>
        <Text style={styles.title2}>
            새로운 MBTI
        </Text>
        <TextInput
            style={styles.input2}
            onChangeText={(text) => setMbti(text)}
            placeholder={ mbti }/>
        <TouchableOpacity
                    onPress={() => {
                        changenick(newnick)
                        changembti(newmbti);
                        changeage(newage);
                        changegender(newgender);
                        navigation.navigate('ProfileScreen');
                    }}
                    style={{
                        justifyContent: 'flex-end',
                        backgroundColor: '#56A7A7',
                        padding: 20,
                        marginLeft: 120,
                        marginTop: 50,
                        marginBottom: 20,
                        borderRadius: 30,
                        width: 150,
                        height: 60,
                        position: 'absolute',
                        top: 350,
                }}>
                    <Text style={{fontSize: 17, textAlign: 'center', color: 'white'}}>수정하기</Text>
                </TouchableOpacity>
        
    </View>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    title1: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#56A7A7',
        marginTop: 50,
        marginLeft: 140,
        position: 'absolute',
        top: 50,
    },
    title2: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#56A7A7',
        marginTop: 50,
        marginLeft: 140,
        position: 'absolute',
        top: 200,
    },
    input1: {
        marginLeft: 160,
        marginBottom: 50,
        fontSize: 20,
        position: 'absolute',
        top: 150,
    },
    input2: {
        marginLeft: 160,
        marginBottom: 50,
        fontSize: 20,
        position: 'absolute',
        top: 300
    },
})

export default EditProfileScreen;