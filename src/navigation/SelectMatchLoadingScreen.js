import React, {useEffect} from 'react';
import { View, Text, ActivityIndicator } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux'; 
import {io} from 'socket.io-client'

const map = ["I", "N", "F", "P"];

const SelectMatchLoadingScreen = ({ route, navigation }) => {
    const state = useSelector(state => (state));
    const { select } = state.select;

    const { id, gender, age, mbti } = state.user
    console.log(select);
    let selected=0;
    for(let i=0; i<select.length; ++i){
        let mappedVal = 0;
        for(let j=0; j<4;++j){
            if(select[i][j] == map[j])
                mappedVal|= 1<<j;
        }
        selected |= 1<< mappedVal;
    }
    useEffect(() => {
    const socket = io('http://192.249.18.173:80');
    socket.on('connect', (io) => {
        console.log('connected');
        socket.emit('init', {
            id: id,
            gender: gender,
            age: age,
            mbti: mbti,
            finding: selected
        })
    })
    socket.on('match', (data) => {
        console.log(data);
        const { opponentSocket, opponentID, opponentMBTI, opponentGender, opponentAge} = data;
    
        navigation.navigate('RandomChattingScreen',{opponentSocket, opponentID, opponentMBTI, opponentGender, opponentAge, socket});
    })
    }, []);

    const selectAlert = () => {
        console.log('empty select');
        alert('한 개 이상의 MBTI를 선택해주세요');
        navigation.goBack();
    }

    if (select === []){
        console.log('null select');
        return {selectAlert};
    }
    else{
        return(
            <View style={{
                marginTop: '50%',
                alignItems:'center'
            }
            }>
                <ActivityIndicator size="large" color="#56A7A7"/>
                <Text>매칭 중..</Text>
                <TouchableOpacity
                    onPress={() => { 
                        socket.disconnect();
                        navigation.goBack();
                    }}
                    style={{
                        justifyContent: 'flex-end',
                        backgroundColor: '#56A7A7',
                        padding: 20,
                        marginTop: '50%',
                        marginBottom: 20,
                        borderRadius: 30,
                        width: 150,
                        height: 60,
                }}>
                    <Text style={{fontFamily: 'aTitleGothic', fontSize: 17, textAlign: 'center', color: 'white'}}>매칭 취소</Text>
                </TouchableOpacity>
            </View>
        )
    };
}



export default SelectMatchLoadingScreen;