const CHANGE_NICKNAME = 'NICKNAME/CHANGE';
const CHANGE_MBTI = 'MBTI/CHANGE';
const CHANGE_AGE = 'AGE/CHANGE';
const CHANGE_GENDER = 'GENDER/CHANGE';

export const changeNickname = (nickname) => ({type: CHANGE_NICKNAME, payload: nickname});
export const changeMbti = (mbti) => ({type: CHANGE_MBTI, payload: mbti});
export const changeAge = (age) => ({type: CHANGE_AGE, payload: age});
export const changeGender = (gender) => ({type: CHANGE_GENDER, payload: gender});

const initialState = {
    id: 1,
    nickname: '닉네임이지롱',
    mbti: 'ISFJ',
    age: 23,
    gender: '여',
};

export default user = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_NICKNAME:
            const nickname = action.payload;
            return {
                ...state,
                nickname,
            };
        case CHANGE_MBTI:
            const mbti = action.payload;
            return {
                ...state,
                mbti,
            };
        case CHANGE_AGE:
            const age = action.payload;
            return {
                ...state,
                age,
            };
        case CHANGE_GENDER:
            const gender = action.payload;
            return {
                ...state,
                gender,
            };
        default:
            return {...state};
    }
}
