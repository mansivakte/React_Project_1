import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import "./App.css";
import Home from "./app/Home";
import Login from "./app/components/Login";
import Details from "./app/components/Details";
import Auth from "./Auth";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  const params = useParams();

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>

          <Route path="/home" element={<Home />}></Route>
          <Route path="/details/:user_id" element={<Details />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
