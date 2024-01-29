import {LOGIN} from "../actionTypes/actionTypes.js";

export const loginUser = (userInfo) => {
    return {
        type: LOGIN,
        payload: userInfo,
    }
};
