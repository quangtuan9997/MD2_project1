import *as userService from "../api/userService";
import { call, put } from 'redux-saga/effects';
import { act_user_success } from "../redux/action";
import { USER_SUCCSESS } from "../redux/constants/actionTypes";
export const USER_SAGA_GET = function* () {
try {
    let listUser= yield call(userService.USER_GET_SERVICE);
    yield put(act_user_success(USER_SUCCSESS,listUser))
} catch (error) {
    console.log('error=>>',error)
}
}
export const USER_SAGA_POST = function* (action){
try {
    yield call (userService.USER_POST_SERVICE,action.payload);
    USER_SAGA_GET();
} catch (error) {
    console.log('error=>>',error)
}
}