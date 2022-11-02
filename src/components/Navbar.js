
import React, { useEffect, useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import userContext from '../context/user/userContext'


const Navbar = (props) => {
    const context = useContext(userContext);
    const { user, getUser } = context;





    // console.log("userdetails of user", user)

    let location = useLocation();
    useEffect(() => {
        console.log(location.pathname);

        if (localStorage.getItem('token')) {
            getUser();
            // props.showAlert(`welcomeback ${user.name}`, "success")

        }
        else {

        }
        // eslint-disable-next-line
    }, [location]); //loaction se useeffect me logout k time pe  change hora hai path ,toh next time login hone pe jese he path change hora hai toh navabar component me ye hook har bar run hora hai jis se getuser fn run hora hai...agar hum location use nahi karege toh logout k bad bhi same user show karega..jb tak refresh/userdetails run na ho.
    let navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate("/login")
        props.showAlert("Logged out Successfully", "success")
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">MyNotebook</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                        </li>
                    </ul>

                    {/* {!localStorage.getItem('token') ? <form className="d-flex">

                        <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
                        <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
                    </form> : <button className='btn btn-primary'>Logout </button>} */}
                    {/* or */}
                    {localStorage.getItem('token') ? <> <Link className="navbar-brand navbar-nav  nav-link " to="/userdetails"> <i className="fa fa-user nav-link" aria-hidden="true"></i> {user.name}</Link><button onClick={handleLogout} className='btn btn-primary'>Logout </button></> : <form className="d-flex">

                        <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
                        <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
                    </form>}
                </div>
            </div>
        </nav>


    )
}

export default Navbar