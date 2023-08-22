import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NoteState from "./context/notes/NotesState";
import { useState } from "react";
import Alert from "./components/Alert";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import UsedTechnologies from "./components/UsedTechnologies";
import Footer from "./components/Footer";

function App() {
  const [alert,setAlert] = useState(null)
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert alert={alert} />
          <div className="container">
            <Routes>
              <Route exact path='/' element={<Home showAlert={showAlert} />} />
              <Route exact path='/about' element={<About />} />
              <Route exact path='/login' element={<Login showAlert={showAlert} />} />
              <Route exact path='/signup' element={<Signup showAlert={showAlert} />} />
              <Route exact path='/usedTechnologies' element={<UsedTechnologies showAlert={showAlert} />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </NoteState>
    </>
  );
}

export default App;
