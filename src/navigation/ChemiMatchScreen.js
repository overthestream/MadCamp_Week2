import React, { component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { NavigationService } from '../common';

const ChemiMatchScreen = props => {
    return(
        <View style={styles.container}>
                <StatusBar barStyle="dark-content" />
                <TouchableOpacity
                        onPress={()=> NavigationService.back()}
                        style={{
                            justifyContent: 'flex-end',
                            backgroundColor: 'rgb(87,174,198)',
                            padding: 20,
                            marginTop: 20,
                            borderRadius: 30
                        }}>
                        <Text style={{fontSize: 20, textAlign: 'center', color: 'white'}}>뒤로</Text>
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

export default ChemiMatchScreen;  