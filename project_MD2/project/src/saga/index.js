import { all, takeLatest} from "redux-saga/effects";
import *as actionType from "../redux/constants/actionTypes";
import { PRO_SAGA_GET } from "./productSaga";
import *as userSaga from "./userSaga";
export const rootSaga=function*(){
   yield  all([
        takeLatest(actionType.USER_GET,userSaga.USER_SAGA_GET),
        takeLatest(actionType.USER_POST,userSaga.USER_SAGA_POST),
        takeLatest(actionType.PRO_GET,PRO_SAGA_GET)
    ])
}