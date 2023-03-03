import { USER_SUCCSESS } from "../constants/actionTypes";
const initialState=[];
export const users=(state=initialState,action)=>{
    switch (action.type) {
        case USER_SUCCSESS:
            state=[...action.payload]
            return state;
        default:
            return state;
    }
}