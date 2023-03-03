import { combineReducers } from "redux";
import {users} from './user';
import { product } from "./product";
export const rootReducer=combineReducers({users,product})
