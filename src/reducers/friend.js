const ADD_FRIEND = 'FRIEND/ADD';
const DELETE_FRIEND = 'FRIEND/DELETE'

export const addFriend = (id) => ({type: ADD_FRIEND, payload: id});
export const deleteFriend = (id) => ({type: DELETE_FRIEND, payload: id});

const initialState = {
    friends: [],
};

export default friend = (state = initialState, action) => {
    switch(action.type){
        case ADD_FRIEND:
            const id = action.payload;
            return {
                friends: state.friends.concat(action.payload)
            };
        case DELETE_FRIEND:
            return {
                friends: state.friends.filter((i) => i!==action.payload),
            };
        default:
            return {...state};
    }
}
