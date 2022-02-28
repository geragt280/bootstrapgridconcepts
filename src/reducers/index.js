import authReducer from "./authReducer";
import userReducer from "./userReducer";
import userListReducer from "./usersListReducer";
import { combineReducers } from 'redux';

const allReducers = combineReducers(
    {
        auth:authReducer,
        user:userReducer,
        userlist:userListReducer
    }
)

export default allReducers;