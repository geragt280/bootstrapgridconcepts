export const loginAction = (user) => {
    return {
        type:'LOGIN',
        userinfo: user,
    }
}
export const getUserToken = (user) => {
    return {
        type: 'GETUSERTOKEN',
        userinfo: user,
    }
}

export const getAllUsers = () => {
    return {
        type: 'GETALLUSERS',
    }
}

export const selectStudents = () => {
    return {
        type: 'SELECTSTUDENT',
    }
}

export const selectBooks = () => {
    return {
        type: 'SELECTBOOK',
    }
}