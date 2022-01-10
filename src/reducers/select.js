const ADD_SELECT = 'SELECT/ADD';
const DELETE_SELECT = 'SELECT/DELETE';

export const add = (mbti) => ({type: ADD_SELECT, payload: mbti});
export const delet = (mbti) => ({type: DELETE_SELECT, payload: mbti});

const initialState = {
    select: []
};

export default select = (state = initialState, action) => {
    switch(action.type){
        case ADD_SELECT:
            console.log(action.payload);
            return {
                select: state.select.concat(action.payload.type)
            };
        case DELETE_SELECT:
            console.log(action.payload);
            return {
                ...state,
                select: state.select.filter((t) => t!==action.payload),
            };
        default:
            return {...state};
    }
}