import { LOGIN } from "../actionTypes/actionTypes.js";

const inititalState = {
    userInfo: null
};

export const loginReducer = (state = inititalState, action) => {
    switch(action.type){
        case LOGIN:
            return{
                ...state,
                userInfo : action.payload
            }
        default:
            return state
    }
}