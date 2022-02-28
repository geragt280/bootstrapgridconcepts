const userListReducer = (state = {}, action) => {
    switch (action.type) {
        case "GETALLUSERS":
            return state;    
        default:
            return state;
    }
}

export default userListReducer;