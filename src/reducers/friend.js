const ADD_FRIEND = 'FRIEND/ADD';

export const addFriend = (id) => ({type: ADD_FRIEND, payload: id});

const initalState = {
    friends: [],
};

export default friend = (state = initialState, action) => {
    switch(action.type){
        case ADD_FRIEND:
            const id = action.payload;
            return {
                ...state,
                friends: [...state.friends, id], 
            };
        default:
            return {...state};
    }
}
