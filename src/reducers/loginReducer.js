import { LOGIN } from "../actionTypes/actionTypes.js";

const inititalState = {
};

export const loginReducer = (state = inititalState, action) => {
    console.log("STATE OBJ");
    console.log(state);
    console.log("action");
    console.log(action);
    switch(action.type){
        case LOGIN:
            return{
                ...state,
                userInfo : action.payload.userInfo
            }
        default:
            return state
    }
}