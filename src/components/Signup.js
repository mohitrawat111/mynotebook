import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Signup = (props) => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
    let navigate = useNavigate();
    const { name, email, password, cpassword } = credentials
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (cpassword === password) {
            const response = await fetch('http://localhost:5000/api/auth/createuser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify({ name, email, password })
            });
            const json = await response.json();
            console.log(json)


            if (json.success) {
                //save the auth token and redirect
                localStorage.setItem('token', json.authToken);
                navigate("/")
                props.showAlert("Account Created Successfully ", "success")

            }
            else {
                props.showAlert("Invalid details", "danger")
            }
        }
        else {
            props.showAlert("Confirm your password", "danger")
        }
    }
    const onchange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div className='container mt-2'>
            <h2 className='my-2'> Create an account to use iNotebook</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name='name' onChange={onchange} value={credentials.name} aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' onChange={onchange} value={credentials.email} aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name='password' minLength={5} required onChange={onchange} value={credentials.password} />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="cpassword" name='cpassword' minLength={5} required onChange={onchange} value={credentials.value} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
