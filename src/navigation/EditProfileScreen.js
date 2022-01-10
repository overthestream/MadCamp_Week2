import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { changeNickname, changeMbti, changeAge, changeGender } from '../reducers/user';

const EditProfileScreen = ({ navigation }) => {
    const state = useSelector((state) => state);
    const { nickname, mbti, age, gender } = state.user;

    const [ newnick, setNick ] = useState(nickname);
    const [ newmbti, setMbti ] = useState(mbti);
    const [ newage, setAge ] = useState(age);
    const [ newgender, setGender ] = useState(gender);
    

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

    const changegender = newgender => {
        dispatch(changeGender(newgender));
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
            onChangeText={(text) => setGender(text)}
            placeholder={ gender }/>
     
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
                        marginLeft: 200,
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