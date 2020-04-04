import {AUTH_LOGIN, USER_REGISTER } from '../../store/actionTypes';

export const authLogin = (data) => {
    return ({
        type: AUTH_LOGIN,
        data: { email: data.email, password: data.pass }
    })
}

export const usrRegister = (data) => {
    console.log(data)
    return ({
        type: USER_REGISTER,
        data: {email: data.email, password: data.password, cpassword: data.cpassword}
   })
}