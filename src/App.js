
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { useState } from 'react';
import UserState from './context/user/UserState';
import Userdetails from './components/Userdetails';


function App() {
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {

    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }
  return (
    <UserState>
      <NoteState>
        <BrowserRouter>
          <Navbar showAlert={showAlert} />
          <Alert alert={alert} />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home showAlert={showAlert} />} />
              <Route path="/about" element={<About />} />
              <Route path="/userdetails" element={<Userdetails />} />
              {/* <Route path="about/*" element={<About />} /> Relpacement of exact path */}
              <Route path="/login" element={<Login showAlert={showAlert} />} />
              <Route path="/signup" element={<Signup showAlert={showAlert} />} />
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </UserState>
  );
}

export default App;
