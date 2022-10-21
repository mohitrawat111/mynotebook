import React, { useContext, useRef } from 'react'
import userContext from '../context/user/userContext'


const About = () => {
    const refClose = useRef(null)
    const context = useContext(userContext);
    const { user, getUser } = context;

    const handleclick = (e) => {
        getUser();

        // getuser(user.name)
        refClose.current.click();

    }

    return (
        <div>
            This is About Page


            <button type="button" onClick={handleclick} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                view user details
            </button>


            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...    <form className='my-3'>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Name</label>
                                    <input type="text" readOnly className="form-control" value={user.name || ''} aria-describedby="emailHelp" minLength={5} required />

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Email</label>
                                    <input type="text" readOnly className="form-control" value={user.email || ''} minLength={5} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">date</label>
                                    <input type="text" readOnly className="form-control" value={user.date || ''} minLength={5} required />
                                </div>


                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About