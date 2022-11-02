import { useState } from "react"
import React from 'react'
import { useNavigate } from "react-router-dom"

export const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let navigate = useNavigate();
    const handleSubmit = async (e) => {

        e.preventDefault();
        const response = await fetch('https://mynotebookjs.herokuapp.com/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        console.log(json)
        if (json.success) {
            //save the auth token and redirect
            localStorage.setItem('token', json.authToken);//Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client replace authtoken to authToken
            props.showAlert("Logged In Successfully", "success")
            navigate("/")
        }
        else {
            props.showAlert("Invalid Credentials", "danger")
        }
    }
    const onchange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div className="mt-2">
            <h2 className="my-2">Login to continue to MyNotebook</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" value={credentials.email} name='email' onChange={onchange} aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" value={credentials.password} name='password' onChange={onchange} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
