const ADD_SELECT = 'SELECT/ADD';
const DELETE_SELECT = 'SELECT/DELETE';

export const add = (mbti) => ({type: ADD_SELECT, payload: mbti});
export const delet = (mbti) => ({type: DELETE_SELECT, paylaod: mbti});

const initialState = {
    select: []
};

export default select = (state = initialState, action) => {
    switch(action.type){
        case ADD_SELECT:
            return {
                ...state, 
                select: [ ...state.select, action.payload],
            };
        case DELETE_SELECT:
            return {
                ...state,
                select: state.select.filter((t) => t !== action.payload),
            };
        default:
            return {...state};
    }
}