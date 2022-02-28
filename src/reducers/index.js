import authReducer from "./authReducer";
import userReducer from "./userReducer";
import userListReducer from "./usersListReducer";
import listTypeReducer from "./listTypeReducer";
import { combineReducers } from 'redux';

const allReducers = combineReducers(
    {
        auth:authReducer,
        user:userReducer,
        userlist:userListReducer,
        listtype:listTypeReducer
    }
)

export default allReducers;