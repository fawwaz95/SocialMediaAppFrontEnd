import {LOGIN} from "../actionTypes/actionTypes.js";

export const loginUser = (userInfo) => {
    console.log("Login user action......");
    return {
        type: LOGIN,
        payload: { userInfo },
    }
};
