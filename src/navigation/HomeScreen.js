import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, Image, BackHandler } from 'react-native';

const HomeScreen = ({ navigation }) => {
    
    return(
        <View style={styles.container}>
                <StatusBar barStyle="dark-content" />
                <Image
                    source={require('../img/main.png')}
                    style={{ width: 420, height: 180, marginBottom: 50}}/>
                <TouchableOpacity
                    onPress={()=> navigation.navigate('SelectMatchScreen')}
                    style={{
                        justifyContent: 'flex-end',
                        backgroundColor: '#56A7A7',
                        padding: 17,
                        marginTop: 20,
                        marginLeft: '23%',
                        borderRadius: 30,
                        width: '55%',
                    }}>
                    <Text style={{fontSize: 20, textAlign: 'center', color: 'white', fontFamily: 'aTitleGothic'}}>선택랜덤매칭</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=> navigation.navigate('ChemiMatchScreen')}
                    style={{
                        justifyContent: 'flex-end',
                        backgroundColor: '#56A7A7',
                        padding: 17,
                        marginTop: 20,
                        marginLeft: '23%',
                        borderRadius: 30,
                        width: '55%',
                    }}>
                    <Text style={{fontSize: 20, textAlign: 'center', color: 'white', fontFamily: 'aTitleGothic'}}>궁합매칭</Text>
                </TouchableOpacity>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
    }
})

export default HomeScreen;  