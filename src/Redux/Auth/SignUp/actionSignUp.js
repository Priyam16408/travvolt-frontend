import * as types from "./actionType"

// const action ={}

// action.signUpRequest=(user)=>{
//     return{
//         type:types.SIGNUP_REQUEST,
//         payload:user,
//     }
// };

// action.signUpSuccess=(user)=>{
//     return {
//         type:types.SIGNUP_SUCCESS,
//         payload:user,
//     }
// }
// action.signUpFailure=(user)=>{
//     return{
//         type:types.SIGNUP_FAILURE,
//         payload:user
//     }
// }

// export {action as signUpActions}

export const fetchSignUp=(user)=>{
    return {
        type:types.SIGNUP_SUCCESS,
        payload:user
    }
}

export const signUpAction=(user)=>{
    if(user)
    {
     return{
        type:types.SIGNUP_REQUEST,
        payload:user
     }
    }
}