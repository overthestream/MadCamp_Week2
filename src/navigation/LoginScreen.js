import React from 'react';
import { View } from 'react-native';
import {WebView} from 'react-native-webview'
import axios from 'axios';               

import { useDispatch } from "react-redux";
import user, { changeGender, changeAge, changeID, changeNickname, changeMbti } from '../reducers/user';

const LoginScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    
    const fetchUserData = (gender, age, id) => {
      dispatch(changeAge(age));
      dispatch(changeGender(gender === 'female' ? '여' : '남'));
      dispatch(changeID(id));  
    }
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
              fetchUserData(result.data.gender, result.data.age, result.data.id);
              if(result.data.mbti){
                dispatch(changeMbti(result.data.mbti));
                dispatch(changeNickname(result.data.nick));
                navigation.navigate('HomeScreen');
              }
              navigation.navigate('SetMbtiScreen');
            }
          }
        }
        />
      </View> 
     );
}

export default LoginScreen;  