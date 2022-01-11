const ADD_SELECT = 'SELECT/ADD';
const DELETE_SELECT = 'SELECT/DELETE';
const RESET_SELECT = 'SELECT/RESET';
 
export const add = (mbti) => ({type: ADD_SELECT, payload: mbti});
export const delet = (mbti) => ({type: DELETE_SELECT, payload: mbti});
export const reset = () => ({type: RESET_SELECT});

const initialState = {
    select: []
};

export default select = (state = initialState, action) => {
    switch(action.type){
        case ADD_SELECT:
            console.log(action.payload);
            return {
                select: state.select.concat(action.payload)
            };
        case DELETE_SELECT:
            console.log(action.payload);
            return {
                ...state,
                select: state.select.filter((t) => t!==action.payload),
            };
        case RESET_SELECT:
            return {
                select: [],
            };
        default:
            return {...state};
    }
}