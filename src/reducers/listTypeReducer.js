const listTypeReducer = (state='Students', action) => {
    switch (action.type) {
        case "SELECTBOOK":
            state="Books";
            return state;
        case "SELECTSTUDENT":
            state="Students";
            return state;
        default:
            return state;
    }
}

export default listTypeReducer;