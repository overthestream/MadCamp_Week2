import React, {useEffect} from 'react';
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'; 
import {io} from 'socket.io-client'

const E = 0b0000;
const I = 0b1000;

const S = 0b0000;
const N = 0b0100;

const T = 0b0000;
const F = 0b0010;

const J = 0b0000;
const P = 0b0001;

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
    })
    }, []);
    return(
        <View><Text>매칭 중 ...</Text></View>
    )
}



export default SelectMatchLoadingScreen;