import { PRO_GET_SERVICE } from "../api/productService";
import { call,put } from "redux-saga/effects";
import { PRO_SUCCSESS } from "../redux/constants/actionTypes";
import { act_user_success } from "../redux/action";
export const PRO_SAGA_GET= function*(){
try {
    let listProduct= yield call(PRO_GET_SERVICE)
    yield put (act_user_success(PRO_SUCCSESS,listProduct))
} catch (error) {
    console.log(error);
}
} 