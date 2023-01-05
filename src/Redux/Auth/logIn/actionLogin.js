import * as types from "./actionType"
import { takeLatest , all, put, fork, call } from "redux-saga/effects";




export const fetchLogIn=(user)=>{
    return{
        type:types.LOGIN_SUCCESS,
        payload:user
    }
}

export const loginAction=(user)=>{
if(user)
{
    return {
        type:types.LOGIN_REQUEST,
        payload:user
    }
}
}
// export {action as userLogInAction}

