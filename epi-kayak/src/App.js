import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <>
      <Jumbotron>
        <h1>🏞️ Epi-Kayak 🏖️</h1>
      </Jumbotron>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </>
  );
}

export default App;
