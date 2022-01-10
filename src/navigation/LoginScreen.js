import React from 'react';
import { View } from 'react-native';
import {WebView} from 'react-native-webview'
import axios from 'axios';               

const LoginScreen = ({ navigation }) => {
    return(
      <View style={
        {
          width: '100%',
          height: '100%',
        }
      }>
        <WebView 
          source={{uri: `https://kauth.kakao.com/oauth/authorize?client_id=63f1fca8dd1d3ae0e3a184293bfbca97&redirect_uri=http://192.249.18.173/user/spinner&response_type=code`}}
          onNavigationStateChange={async (navState) =>{
            if(navState.url.substring(0,34)=='http://192.249.18.173/user/spinner' && !navState.loading){
              const result = await axios.get(`http://192.249.18.173/user/oauth?code=${navState.url.substring(40)}`);
              console.log(result.data);
              
              navigation.navigate('SetMbtiScreen');
            }
          }
        }
        />
      </View> 
     );
}

export default LoginScreen;  