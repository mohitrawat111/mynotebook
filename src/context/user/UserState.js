import React, { useState } from 'react'
import userContext from './userContext'



const UserState = (props) => {
    const host = "https://mynotebookjs.herokuapp.com"
    const userInitial = []
    const [user, setuser] = useState(userInitial)

    //Fetch user

    const getUser = async () => {
        //API Call
        const response = await fetch(`${host}/api/auth/getuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }

        });
        const json = await response.json();
        console.log("userdetails", json)
        setuser(json)




    }
    return (
        <userContext.Provider value={{ user, getUser }}>
            {props.children}
        </userContext.Provider>
    )
}

export default UserState