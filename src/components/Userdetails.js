import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import userContext from '../context/user/userContext';


const Userdetails = () => {

    const context = useContext(userContext);
    const { user, getUser } = context;
    let navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('token')) {
            getUser();

        }
        else {
            navigate("/login")
        }

        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <div className="container my-3">
                <h2>User Details</h2>
                <form className='my-3'>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Name</label>
                        <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" value={user.name || ''} minLength={5} required readOnly />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Email</label>
                        <input type="text" className="form-control" id="description" name='description' value={user.email || ''} minLength={5} required readOnly />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Account Creation Date</label>
                        <input type="text" className="form-control" id="tag" name='tag' value={user.date || ''} minLength={5} required readOnly />
                    </div>


                </form>
            </div>
        </div>
    )
}

export default Userdetails