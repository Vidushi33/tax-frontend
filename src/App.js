import "./App.css";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Tax from "./Components/Tax"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

function App() {
  return (
  <Router>
    <Routes>
        <Route exact path = "/" element = {<Register />} />
        <Route exact path = "/login" element = {<Login />} />
        <Route exact path = "/tax" element = {<Tax />} />
    </Routes>
  </Router>
  );
}

export default App;
