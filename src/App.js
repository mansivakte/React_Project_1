import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import "./App.css";
import Home from "./app/Home";
import Login from "./app/components/Login";
import Details from "./app/components/Details";

function App() {
  const params = useParams();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/details/:user_id" element={<Details />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
