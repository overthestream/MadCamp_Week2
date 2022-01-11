import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { GiftedChat, InputToolbar, Bubble, Actions, Send } from 'react-native-gifted-chat';
import Icon from 'react-native-vector-icons/Ionicons';
import {io} from 'socket.io-client'
import axios from 'axios';

//웹 소켓으로부터 받아온 Message를 넣으면 됨

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

const FriendChattingScreen = ({ navigation, route }) => {
    const [text, setText] = useState("");
    const [messages, setMessages] = useState([]);
    const state = useSelector((state) => state);
    const { id, nickname } = state.user;
    const [incre, setIncre] = useState(1)
    const dispatch = useDispatch();
    const {friendId} = route.params;



    
    const user = {
        _id: id,
        name: nickname,
      };
    let socket;
    useEffect(() => {

      const fetchData = async () => {
        try {
        const result = await axios.get(`http://192.249.18.173/friend/talk?from=${id}&to=${friendId}`);
        const list = result.data.map((item) => {
          const obj = {
            _id:incre,
            text: item.talk_message,
            createdAt: item.send_at,
            user: id == item.send_from ? user : {
              _id:2,
              name: item.send_from,

              avatar: require(`../img/INTP.png`),
            }
          }
          setIncre(incre+1);
          return obj;
        })
        console.log('hiiiih');
        setMessages(list);}
        catch (err) {
          console.log(err);
        }
      }
      fetchData();
      socket = io('http://192.249.18.173:80');
      socket.on('connect', (io) => {
          console.log('connected');
      })
      socket.on('receiveTalk', msg => {
        if(msg.receiverID ==id){
        setMessages(previousMessages => GiftedChat.append(previousMessages,{
            _id: incre,
            text: msg.message,
            createdAt: msg.timestamp,
            user: {
              _id: 2,
              name: msg.senderID,
              avatar: require(`../img/INTP.png`),
            }}));
        setIncre(incre+1);
          }
      })
    }, []);


      //메시지 송신 부분
      const onSend = useCallback((messages = []) => {
        setIncre(incre+1);
        socket.emit('sendTalk',{message: messages[0].text, senderSocket: socket.id, senderID:id, receiverID: friendId, timestamp: new Date()})
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
      }, [])
   
    return (
        <GiftedChat
          renderBubble={renderbubble}
          messages={messages}
          onSend={messages => onSend(messages)}
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

export default FriendChattingScreen;