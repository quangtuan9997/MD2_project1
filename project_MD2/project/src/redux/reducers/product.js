import { PRO_SUCCSESS } from "../constants/actionTypes";
const initialState=[];
export const product=(state=initialState,action)=>{
    switch (action.type) {
        case PRO_SUCCSESS:
            state=[...action.payload]
            return state;
        default:
            return state;
    }
}
