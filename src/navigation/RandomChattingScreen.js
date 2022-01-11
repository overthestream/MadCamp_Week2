import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, BackHandler } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { GiftedChat, InputToolbar, Bubble, Actions, Send } from 'react-native-gifted-chat';
import Icon from 'react-native-vector-icons/Ionicons';
import { addFriend } from '../reducers/friend';
import axios from 'axios'
//웹 소켓으로부터 받아온 Message를 넣으면 됨

const renderActions = (addfriend, navigation, socket) => { 
  return(
    <>
    <Actions 
      icon={() =>
          <Icon name="log-out-outline" size={25}/>}
      onPressActionButton={() => 
                            { 
                              socket.disconnect();
                              navigation.navigate('HomeScreen');
                            }
                          }
      />
    <Actions 
      icon={() =>
          <Icon name="add-circle-outline" size={25}/>}
      onPressActionButton={() => 
                            { 
                  
                            addfriend();
                            alert('친구가 추가 됐습니다.')

                            }
                          }           
     />
     </>
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

const RandomChattingScreen = ({ navigation,  route }) => {
    const { opponentSocket, opponentID, opponentMBTI, opponentGender, opponentAge, socket} = route.params;
    const [text, setText] = useState("");
    const [messages, setMessages] = useState([]);
    const state = useSelector((state) => state);
    const { id, nickname } = state.user;
    const dispatch = useDispatch();
    const [incre, setIncre] = useState(1);

    const addfriend = () => {
      axios.post('http://192.249.18.173/friend/add', {
       
          from:id,
          to:opponentID
        
      })
      dispatch(addFriend(opponentID));
    };

    const user = {
        _id: id,
        name: nickname,
      };
      previousMessages => GiftedChat.append(previousMessages, messages);
      
    useEffect(() => {
      socket.on('opponentDisconnected!', id => {
       ////// / tba
        
      })
      socket.on('receiveMsg', msg => {
        setMessages(previousMessages => GiftedChat.append(previousMessages,{
            _id: incre,
            text: msg.message,
            createdAt: msg.timestamp,
            user: {
              _id: 2,
              name: opponentID,
              avatar: require(`../img/INTP.png`),
            }}));
        setIncre(incre+1);
      })

      const backAction = () => { return true; };
      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction);

      return () => backHandler.remove();
    }, []);
      
      const onSend = useCallback((messages = []) => {
        setIncre(incre+1)
        socket.emit('sendMsg',{message: messages[0].text, senderSocket: socket.id, receiverSocket: opponentSocket, timestamp: new Date()})
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
      }, [])
   
    return (
        <GiftedChat
          renderBubble={renderbubble}
          messages={messages}
          onSend={messages => onSend(messages)}
          renderActions={() => renderActions(addfriend, navigation, socket)}
          renderSend={renderSend}
          placeholder='채팅을 입력하세요'
          loadEarlier={false}
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

export default RandomChattingScreen;