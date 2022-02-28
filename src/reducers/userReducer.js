const userReducer = (state = {}, action) => {
    switch (action.type) {
        case "GETUSERTOKEN":
            state = {
                username:action.userinfo,
            }
            return state;    
        default:
            return state;
    }
}

export default userReducer;