import React from 'react';
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'; 

const SelectMatchLoadingScreen = ({ route, navigation }) => {
    const state = useSelector(state => (state));
    const { select } = state.select;
    console.log(select);
    
        return(
            <View><Text>매칭 중 ...</Text></View>
        )
}



export default SelectMatchLoadingScreen;