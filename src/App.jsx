import {Route, Routes} from "react-router-dom"
import Home from "./Pages/Home/Home";
import './App.css';
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Profile from "./Pages/Profile/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/Profile" element={<Profile/>} />
        <Route path="*" element={"404 Error : No Page Found"} />
      </Routes>
    </div>
  );
}

export default App;
