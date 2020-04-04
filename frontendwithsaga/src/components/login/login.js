import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authLogin, usrRegister } from './loginAction';
import { Tabs, Tab, Typography, Box, TextField, Button } from '@material-ui/core';

const TabPanel = (props) => {
    const { value, index, children } = props
    return (
        <Typography>
            {value === index && <Box>{children}</Box>}
        </Typography>
    )
}

export const Login = (props) => {

    const dispatch = useDispatch();
    const userData = useSelector(state => state.authReducer);
    const [formData, setformData] = useState({ email: "", pass: "", password: "", cpassword: "" })
    const [tabSelected, setTab] = useState(0)

    const setData = e => {
        setformData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleChange = (e, newValue) => {
        setTab(newValue)
    }

    const cancelRegister = () => {
        setTab(0)
    }

    const css = {
        textfield:{
        width: "100%"},
        button: {
            margin: "10px"
        }
    }

    return (<div style={{ margin: "auto", width: "300px" }}>
        <Tabs value={tabSelected} indicatorColor="primary" textColor="primary" onChange={handleChange} aria-label="disabled tabs example">
            <Tab label="Login" />
            <Tab label="Register" />
        </Tabs>
        <br /><br />

        <TabPanel value={tabSelected} index={0}>
            <TextField type="text" name="email" style={css.textfield} label="Login Email" onChange={setData} />
            <br />
            <TextField label="Password" name="pass" style={css.textfield} type="password" autoComplete="current-password" onChange={setData} />
            <br /><br />
            <Button variant="contained" onClick={() => dispatch(authLogin(formData))}> Login </Button >
        </TabPanel>

        <TabPanel value={tabSelected} index={1}>
            <TextField type="text" name="email" style={css.textfield} label="Login Email" onChange={setData} />
            <br />
            <TextField label="Password" name="password" type="password" style={css.textfield} autoComplete="current-password" onChange={setData} />
            <br />
            <TextField label="ConfirmPassword" name="cpassword" type="password" style={css.textfield} autoComplete="current-password" onChange={setData} />
            <br /><br />
            <Button variant="contained" style = {css.button} onClick={() => dispatch(usrRegister(formData))}> Register </Button >
            <Button variant="contained" style = {css.button} onClick={() => cancelRegister()}> Cancel </Button >
        </TabPanel>
    </div>)
}
