const START_CHATTING = 'CHATTING/START';
const QUIT_CHATTING = 'CHATTING/QUIT'

export const startChatting = (id) => ({type: START_CHATTING, payload: id});
export const quitChatting = (id) => ({type: QUIT_CHATTING, payload: id});

const initialState = {
    chattingRooms: [],
};

export default chattingroom = (state = initialState, action) => {
    switch(action.type){
        case START_CHATTING:
            const id = action.payload;
            return {
                ...state,
                friends: [...state.friends, id], 
            };
        case QUIT_CHATTING:
            const id = action.payload;
            return {
                ...state,
                chattingRooms: state.chattingRooms.filter((i) => i !== id)
            }
        default:
            return {...state};
    }
}