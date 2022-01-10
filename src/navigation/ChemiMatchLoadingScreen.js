import React from 'react';
import { View, Text } from 'react-native'

const ChemiMatchLoadingScreen = ({ route, navigation }) => {
    const { Mbtis } = route.params;
    console.log(Mbtis);
    
        return(
            <View><Text>매칭 중 ...</Text></View>
        )
}



export default ChemiMatchLoadingScreen;