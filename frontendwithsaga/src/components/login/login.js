import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authLogin } from './loginAction';

export const Login = (props) => {
    const dispatch = useDispatch();

    const [formData, setformData] = useState({ email: "", pass: "" })

    const setData = e => {
        setformData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (<div>
        <h3>Login Page</h3>
        <br /><br />
        <label>User Name: </label>
        <input type="text" name="email" onChange={setData} /><br /><br />
        <label>Password: </label>
        <input type="text" name="pass" onChange={setData} /><br /><br />
        <button onClick={() => dispatch(authLogin(formData))}> Login </button >
    </div>)
}