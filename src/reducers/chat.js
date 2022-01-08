const SEND_CHAT = 'SEND_CHAT';
const RECEIVE_CHAT = 'RECEIVE_CHAT';

export const sendChat = () => ({type: SEND_CHAT, payload: socketId});
export const receiveChat = (data) => ({type: RECEIVE_CHAT, payload: data});

const initalState = {
    chatList: [],
    socketId: null,
};

export default chat = (state = initalState, action) => {
    switch(action.type){
        case SEND_CHAT:
            return {
                ...state,
                socketId: action.socketId,
            };
        case RECEIVE_CHAT:
            const { data } = action.payload;
            let newChatList = state.chatList.slice();
            newChatList.push(data);
            return {
                ...state,
                chatList: newChatList,
            };
        default:
            return state;
    }
}