const authReducer = (state = 'loggedout', action) => {
    switch (action.type) {
        case 'LOGIN':
            state = 'login';
            return state;
        case 'LOGOUT':
            state = 'loggedout';
            return state;
        default:
            return state;
    }
}

export default authReducer;