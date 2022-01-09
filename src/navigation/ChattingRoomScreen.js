import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { GiftedChat, InputToolbar, Bubble, Actions, Send } from 'react-native-gifted-chat';
import Icon from 'react-native-vector-icons/Ionicons';
import { addFriend } from '../reducers/friend';

//웹 소켓으로부터 받아온 Message를 넣으면 됨

const renderActions = (addfriend) => { 
  return(
    <Actions 
      icon={() =>
          <Icon name="add-circle-outline" size={25}/>}
      onPressActionButton={() => 
                            { 
                            //친구 추가
                            addfriend();
                            alert('친구가 추가 됐습니다.')

                            }
                          }
     />
  );
}

const renderSend = props => {
  return(
    <Send {...props} containerStyle={{ marginBottom: 10, marginRight: 10 }}>
      <Icon name="chatbubbles-outline" size={25}/>
    </Send>
  );
}

const renderbubble = props => {
  return(
    <Bubble {...props}
      textStyle={{
        right: {
          color: 'white',
          fontFamily: "CerebriSans-Book"
        },
        left: {
          color: '#24204F',
          fontFamily: "CerebriSans-Book"
        },
      }}
      wrapperStyle={{
        right: {
          backgroundColor: "#56A7A7",
        },
      }}
    />
  );
}

const ChattingRoomScreen = ({ navigation }) => {
    const [text, setText] = useState("");
    const [messages, setMessages] = useState([]);
    const state = useSelector((state) => state);
    const { id, nickname } = state.user;
    
    const dispatch = useDispatch();

    const addfriend = () => {
      dispatch(addFriend(2));
    };

    const user = {
        _id: id,
        name: nickname,
      };
    /* 메시지 수신 부분
    useEffect(() => {
    socket.emit('loadMessages', {});
    socket.on('loadMessages', msg => {
      setMessages(msg);
    })
  }, []);
    */
      

    useEffect(() => {
        setMessages([
          {
            _id: 1,
            text: 'Hello developer',
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'React Native',
              avatar: require('../img/INTP.png'),
            },
          },
          {
              _id: 2,
              text: 'Hello Avatar',
              createdAt: new Date(),
              user,
          },
          {
            _id: 3,
            text: 'This is Test',
            createdAt: new Date(),
            user,
          },
          {
            _id: 4,
            text: 'This is Test2',
            createdAt: new Date(),
            user,
        },
        ])
      }, [])

      //메시지 송신 부분
      const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
      }, [])
   
    return (
        <GiftedChat
          renderBubble={renderbubble}
          messages={messages}
          onSend={messages => onSend(messages)}
          renderActions={() => renderActions(addfriend)}
          renderSend={renderSend}
          placeholder='채팅을 입력하세요'
          loadEarlier={true}
          user={user}
        />
      );

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    chatInput: {
        width: 250,
        padding: 10,
        marginTop: 200,
        height: 40,

    },
    send: {
        position: 'absolute',
        left: 365,
        right: 0,
        bottom: 5,
    },
    inputContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 5,
    },
    inputToolbar: {
        borderColor: 'grey',
        borderRadius: 5
    }

}) 

export default ChattingRoomScreen;