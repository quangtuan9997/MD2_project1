import *as actionType from "./constants/actionTypes";
export const act_get_user = () => {
    return {
        type: actionType.USER_GET
    }
}
export const act_user_success = (actionType, data) => {
    return {
        type: actionType,
        payload: data
    }
}
export const act_create_user = (newUser) => {
    return {
        type: actionType.USER_POST,
        payload: newUser
    }
}
export const act_get_pro=()=>{
    return {
        type:actionType.PRO_GET
    }
}
export const act_pro_success=(actionType, data) => {
    return {
        type: actionType,
        payload: data
    }
}