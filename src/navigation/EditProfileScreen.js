import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { changeNickname, changeMbti, changeAge, changeSex } from '../reducers/user';

const EditProfileScreen = ({ navigation }) => {
    const state = useSelector((state) => state);
    const { nickname, mbti, age, sex } = state.user;

    const [ newnick, setNick ] = useState(nickname);
    const [ newmbti, setMbti ] = useState(mbti);
    const [ newage, setAge ] = useState(age);
    const [ newsex, setSex ] = useState(sex);

    const ageString = String(age);

    const dispatch = useDispatch();

    const changenick = newnick => {
        dispatch(changeNickname(newnick));
    }

    const changembti = newmbti => {
        dispatch(changeMbti(newmbti));
    }
    
    const changeage = newage => {
        dispatch(changeAge(newage));
    }

    const changesex = newsex => {
        dispatch(changeSex(newsex));
    }


    return(<View>
        <TextInput
            onChangeText={(text) => setNick(text)}
            placeholder={ nickname }/>
        <TextInput
            onChangeText={(text) => setMbti(text)}
            placeholder={ mbti }/>
        <TextInput
            onChangeText={(text) => setAge(parseInt(text))}
            placeholder={ ageString }/>
        <TextInput
            onChangeText={(text) => setSex(text)}
            placeholder={ sex }/>
        <TouchableOpacity
                    onPress={() => {
                        changembti(newmbti);
                        changeage(newage);
                        changesex(newsex);
                        navigation.navigate('ProfileScreen');
                    }}
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
                    <Text style={{fontSize: 17, textAlign: 'center', color: 'white'}}>수정하기</Text>
                </TouchableOpacity>
        
    </View>);
}

export default EditProfileScreen;